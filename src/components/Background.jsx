import React, { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = document.body.scrollHeight
    let animId

    const resize = () => {
      width = window.innerWidth
      height = document.body.scrollHeight
      canvas.width = width
      canvas.height = height
    }

    // Particles
    const PARTICLE_COUNT = 80
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
      drift: (Math.random() - 0.5) * 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1
      const gridSize = 80

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Floating gold particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`
        ctx.fill()

        // Move upward with slight drift
        p.y -= p.speed
        p.x += p.drift

        // Fade in/out
        p.alpha += (Math.random() - 0.5) * 0.01
        p.alpha = Math.max(0.05, Math.min(0.6, p.alpha))

        // Reset when off screen
        if (p.y < -5) {
          p.y = height + 5
          p.x = Math.random() * width
        }
        if (p.x < -5) p.x = width + 5
        if (p.x > width + 5) p.x = -5
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(document.body)

    return () => {
      cancelAnimationFrame(animId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  )
}

export default Background
