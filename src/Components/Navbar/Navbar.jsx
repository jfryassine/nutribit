import {React, useState} from 'react'
import "./navbar.scss"
import logo from "../../assets/logo.png"
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
    <div className="topbar">
        <div className="left">
        <a className='logo' > <img className='logo' src={logo} alt="" /></a>
          </div>
          
        <div className="right">

        <select className="custom-select"  onChange={changeLanguageHandler}>
        <option disabled selected>Language 🌐 </option>
        <option value="en" >English</option>
        <option value="ar" >العربية</option>
      </select>
        
        
        </div>
        </div>
    </>
  )
}
