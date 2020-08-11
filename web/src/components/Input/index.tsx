import React from 'react'

import './styles.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    placeholder?: string
}

const Input: React.FC<InputProps> = ({ name, label, placeholder, ...rest}) => {
    
    return (
        <div className="input-block">
            { label && <label className="label" htmlFor={name}>{label}</label>}
            <input type="text" id={name} {...rest} />
            { placeholder && <label className="placeholder" htmlFor={name}><span>{placeholder}</span></label>}
        </div>
    )
}

export default Input