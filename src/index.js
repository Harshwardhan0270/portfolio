import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-500">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Then wrap your <App />
<ErrorBoundary>
  <App />
</ErrorBoundary>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
