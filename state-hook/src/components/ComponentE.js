import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext, CountContext} from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {/* <ComponentF /> */}

            {/* {user} - {channel} */}
            <ComponentF />
        </div>
    )
}

export default ComponentE
