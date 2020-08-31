import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        // somethis or nothing 
        return this.state.isLoggedIn && <div>Welcome Yeonkyu</div>


        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Yeonkyu</div> :
        //     <div>Welcome guest</div>
        // )


        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Yeonkyu</div>
        // } else {
        //     message = <div>Welcome guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Yeonkyu
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>Welcome Yeonkyu</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
