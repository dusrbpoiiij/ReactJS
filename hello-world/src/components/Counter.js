import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count)  // 즉시 동기 
        // })
        // console.log(this.state.count)  // 비동기 

        // 한번에 여러번 함수 실행하는데 전에 꺼를 참고해서 사용해야 할 때 prevState 사용 
        this.setState((prevState, props) => ({
            count: prevState.count + Number(props.addValue)
        }), () => {
            console.log(this.state.count)
        })
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <div>Count - {count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
