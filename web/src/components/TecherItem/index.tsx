import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

export interface Teacher {
    id: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, ...rest}) => {
    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt="Avatar"/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>

        <p>
            {teacher.bio}
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>{teacher.cost}</strong>
            </p>
            <button type="button">
                <img src={whatsIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem