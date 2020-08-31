import React, { Component } from 'react'

class Welcome extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             className: props.primary ? 'primary' : ''
        }
    }
    
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state 

        return <h1 className={this.state.className}>Welcome {name} a.k.a {heroName} </h1>
    }
}

export default Welcome