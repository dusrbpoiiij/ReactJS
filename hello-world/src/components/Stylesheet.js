import React from 'react'
import './myStyles.css'

function stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className={`${className} font-xl`}>Style sheet</h2>
        </div>
    )
}

export default stylesheet
