import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )

    // JSX를 사용하여 HTML 작성 
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummy'}, 
        React.createElement('h1', null, 'Hello Yeonkyu') 
    )
}

export default Hello