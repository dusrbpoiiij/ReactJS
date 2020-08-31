import React, { Component } from 'react'

export class ChildComponent2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : ''
        }

    }
    
    clickHandler = () => {
        this.props.greetHandler(this.state.name)
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    render() {
        return (
            <div>
                <input name="name" value={this.state.name} onChange={this.handleName} />
                <button onClick={this.clickHandler}>Greet Parent</button>
            </div>
        )
    }
}

export default ChildComponent2

