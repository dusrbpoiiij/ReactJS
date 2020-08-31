import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)


    // componentDidUpdate 랑 같은 
    useEffect(() => {   // run after every render !!
        document.title = `You Clicked ${count} times`
        console.log("update use effect")
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
