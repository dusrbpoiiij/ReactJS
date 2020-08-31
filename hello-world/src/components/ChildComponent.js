import React from 'react'

function ChildComponent(props) {

    // function clickHandler() {
    //     props.greetHandler('asd')
    // }



    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
