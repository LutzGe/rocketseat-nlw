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
    const [olho, setOlho] = useState(false)
    const [pwrd, setPassword] = useState(!password)
    const [image, setImage] = useState(olhoAberto)

    useEffect(() =>{
      setPassword(!pwrd)
      setImage(olho ? olhoFechado : olhoAberto)
    }, [olho])

    return (
        <div className="input-block">
            { label && <label className="label" htmlFor={name}>{label}</label>}
            
            <input 
              type={pwrd ? 'password' : 'text'}
              {...rest}
              id={name}
            />
            { placeholder && <label className="placeholder" htmlFor={name}><span>{placeholder}</span></label>}
            {/* Adiciona o olhinho se o campo for de */}
            { password &&
                <button 
                  type="button"
                  className="olho" 
                  onClick={e => { setOlho(!olho)}}>
                  <img src={image} alt="olho"/>
                </button>
            }
        </div>
    )
}

export default Input