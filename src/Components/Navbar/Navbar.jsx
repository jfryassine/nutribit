import {React, useState} from 'react'
import "./navbar.scss"
import logo from "../../assets/logo_white.png"
import { useTranslation } from "react-i18next";
import FontAwesomeIcon from '@fortawesome/fontawesome-free'

export const Navbar = () => {

    const [currentPage, setCurrentPage] = useState('home');

    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
      const languageValue = e.target.value
      i18n.changeLanguage(languageValue);
    }

    

  return (
    <>
    <div className="topnav">
        <img className='logo' src={logo} alt="" />
        
        <select className="custom-select"  onChange={changeLanguageHandler}>
        <option disabled selected>Language 🌐 </option>
        <option value="en" >English</option>
        <option value="ar" >العربية</option>
      </select>
        <a class={currentPage==='home' ? 'active' : 'notactive'} href="#home" onClick={()=>setCurrentPage('home')}>{t('home')}</a>
        <a class={currentPage==='about' ? 'active' : 'notactive'} href="#about" onClick={()=>setCurrentPage('about')}>{t('contact')}</a>
    </div>
    </>
  )
}
