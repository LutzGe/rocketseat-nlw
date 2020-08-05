import React from 'react';

import AsmonImage from '../../assets/images/Asmongold.jpg'
import whatsIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src={AsmonImage} alt="Asmongold"/>
            <div>
                <strong>Asmongold</strong>
                <span>World of Warcraft</span>
            </div>
        </header>

        <p>
            uihofgdhufiodsfdfuighduis fhuisodgf dusugfdshuguhfidsg
            <br/><br/>
            husfdihu8gfdsgfdhsugdfshuiopgfd\shusfdihu8gfdsgfdhsugdfshu
            husfdihu8gfdsgfdhsugdfshuiopgfd\shusfdihu8gfdsgfdhsugdfshuiopgfd
            \sihu8gfdsgfdhsugdfshuiopgfd\s
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>Muita grana</strong>
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