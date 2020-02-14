import React, { Component } from 'react'

export class ErrorBoundry extends Component {

    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render() {

        if(this.state.hasError){
            return (
                <div>
                   <h1>Error Encountered</h1> 
                </div>
            )
        }

        return this.props.children

    }
}

export default ErrorBoundry
