import {React, useState} from 'react'
import "./navbar.scss"
import logo from "../../assets/logo_white.png"
import { useTranslation } from "react-i18next";
import FontAwesomeIcon from '@fortawesome/fontawesome-free'

export const Navbar = () => {

    const [currentPage, setCurrentPage] = useState('home');
    

    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
      
      i18n.changeLanguage(e);
    }

    

  return (
    <>
    <div className="topbar">
        <div className="left">
        <a className='logo' > <img className='logo' src={logo} alt="" /></a>
          </div>
          
        <div className="right">

        
        <a href="#"  onClick={()=>changeLanguageHandler('en')}>English </a>|
        <a href="#"  onClick={()=>changeLanguageHandler('ar')}> العربية</a>
      
        
        
        </div>
        </div>
    </>
  )
}
