import React from 'react'
import {Instagram,Telegram} from "@material-ui/icons"
import './footer.scss'
import logo from '../../assets/logo.png'
import wave from '../../assets/wave.svg'
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

    return (
        <div>
<footer class="footer">
<div className="footer_container">
<img className='wave' src={wave} />
<div className="footer-right">

  <a href="https://www.instagram.com/nutribit_/" target="_blank" rel="noopener noreferrer"><Instagram className="icon"/></a>
  <a href="#" target="_blank" rel="noopener noreferrer"><Telegram className="icon"/></a>
  

</div>

<div className="footer-left">

<label className="copyright_text">All rights reserved, nutribit &copy; 2022</label>
</div>
</div>
</footer>
        </div>
    )
}
