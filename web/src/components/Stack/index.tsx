import React from 'react'

import './styles.css'

interface StackProps {}

const Stack: React.FC<StackProps> = props => {
    
    return (
        <div className="stack">
            {props.children}
        </div>
    )
}

export default Stack