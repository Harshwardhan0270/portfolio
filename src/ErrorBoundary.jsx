import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-red-500 mt-10 text-lg">
          Something went wrong. Please try again later.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
