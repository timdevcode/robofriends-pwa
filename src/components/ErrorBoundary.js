import React, { Component } from "react"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    // This Lifecycle Hook will catch errors
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Error!</h1>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary