import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import ChildComponent2 from './ChildComponent2'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
                <ChildComponent2 greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
