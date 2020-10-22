import React from 'react'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = props => {
    return (
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>
    )
}

export default Navigation

