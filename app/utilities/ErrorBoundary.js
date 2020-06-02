import React, { Component } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({errorMessage: error.message});
  }

  render() {
    if (this.state.hasError) {
      return (
      <div>
        <h3>Something went wrong.</h3>
        <p>{this.state.errorMessage}</p>
      </div>)
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;