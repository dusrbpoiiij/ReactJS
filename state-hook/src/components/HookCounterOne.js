import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    // componentDidUpdate 랑 같은 
    useEffect(() => {   // run after every render !!

        
        console.log("useEffect - Updating document title")
        document.title = `You Clicked ${count} times`
    }, [count]) // count 값이 변할 때만 안에 있는거 실행 

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
