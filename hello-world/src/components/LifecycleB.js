import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Yeonkyu'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps ')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B            
            </div>
        )
    }
}

export default LifecycleB
