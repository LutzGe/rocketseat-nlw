import React from 'react'
import { Link } from 'react-router-dom'


import './styles.css'
import Navigation from '../Navigation'

interface PageHeaderProps {
    title?: string
    description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
    return (
        <header className="page-header">
            <Navigation />
            <div className="header-content">
                { title && <strong>{ title }</strong> }
                { children }
                { description && <p>{ description }</p>}
            </div>
        </header>
    )
}

export default PageHeader;