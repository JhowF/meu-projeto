import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'

import style from './Footer.module.css'

function Footer(){

    return(
        <footer>
            <ul className={style.social_list}>
                <li><FaFacebook/> Facebook</li>
                <li><FaInstagram/> Instagram</li>
                <li><FaLinkedin/> Linkedin</li>
            </ul></footer>
    )
}

export default Footer