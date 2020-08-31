import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // binding in the constructor 
        // this.clickHandler = this.clickHandler.bind(this)  // 3. binding best option 
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })

    //     console.log(this)
    // }

    // 4. Function binding  
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                {/*1.  <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*2.  <button onClick={() => this.clickHandler()}>Click</button> */}
                {/*3. */}<button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
