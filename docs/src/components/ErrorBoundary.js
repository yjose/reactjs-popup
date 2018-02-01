import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  componentDidCatch (error, errorInfo) {
    this.setState({
      hasError: true,
    })
  }
  render () {
    if (this.state.hasError) {
      return (
        <div>
          <h1>
            404 - Oh no's! Oh-no! Something's gone wrong! refresh this page or{' '}
            <a href="https://github.com/yjose/reactjs-popup/issues">open an issue </a>{' '}
          </h1>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
