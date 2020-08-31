import React, { Component } from 'react'
import UserContext, { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}  {this.context} </div>
                    }
                }
            </UserConsumer>
        )
    }
}

ComponentF.contextType = UserContext

export default ComponentF
