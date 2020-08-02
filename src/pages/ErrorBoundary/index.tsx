import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

class ErrorBoundary extends Component {
  constructor (props: any) {
    super(props)

    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError (error: any) {
    return { hasError: true }
  }

  componentDidCatch (error : any, errorInfo : any) {
    console.log('ERROR BOUNDARY CATCH')

    this.setState({
      error,
    })
  }

  render () {
    console.log(this.state.hasError === true)

    if (this.state.hasError === true) {
      return (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
