import React from 'react'

const Button = ({children, className, onClick}) => {
    return (
        <div>
            <button className={className} onClick={onClick}>{ children}</button>
        </div>
    )
}

export default Button
