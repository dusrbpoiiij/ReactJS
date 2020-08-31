import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        // 방법 첫번째 
        this.inputRef = React.createRef()
        this.inputRef2 = React.createRef()

        // 방법 두번째 (Call Back)
        this.cbRef = null 
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.inputRef2} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
