import React, { useState, useEffect } from 'react'

import './styles.css'
import olhoAberto from '../../assets/images/icons/visibility-grey.png'
import olhoFechado from '../../assets/images/icons/no-visibility1.png'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    placeholder?: string
    password?: boolean
}

const Input: React.FC<InputProps> = ({ name, label, placeholder, password, ...rest}) => {
    
    return (
        <div className="input-block">
            { label && <label className="label" htmlFor={name}>{label}</label>}
            <input {...rest} id={name} />
            { placeholder && <label className="placeholder" htmlFor={name}><span>{placeholder}</span></label>}
        </div>
    )
}

export default Input