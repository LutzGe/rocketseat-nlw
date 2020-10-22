import React, { useState, useEffect } from 'react'

import './styles.css'
import olhoAberto from '../../assets/images/icons/visibility-grey.png'
import olhoFechado from '../../assets/images/icons/no-visibility1.png'

interface PassowrdInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    placeholder?: string
    password?: boolean
}

const PasswordInput: React.FC<PassowrdInputProps> = ({ name, label, type, placeholder, ...rest}) => {
    
    // Se for campo de senha
    const [olho, setOlho] = useState(false)
    const [pwrd, setPwrd] = useState(type)
    const [image, setImage] = useState(olhoAberto)

    useEffect(() => {
      setPwrd(olho ? 'text' : 'password')
      setImage(olho ? olhoFechado : olhoAberto)
    }, [olho])

    return (
        <div className="input-block">
            { label && <label className="label" htmlFor={name}>{label}</label>}
            <input type={pwrd} {...rest} id={name} />
            { placeholder && <label className="placeholder" htmlFor={name}><span>{placeholder}</span></label>}
            <button 
                type="button"
                className="olho" 
                onClick={e => { setOlho(!olho)}}>
                <img src={image} alt="olho"/>
            </button>
        </div>
    )
}

export default PasswordInput