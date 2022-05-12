import React from 'react'

export default function Button({buttonType, onClick, buttonName}) {
    return <button type={buttonType} className="btn btn-primary" onClick={onClick} >{buttonName}</button>

}
