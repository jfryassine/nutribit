import React from 'react'
import {Instagram,LinkedIn,GitHub} from "@material-ui/icons"
import './footer.scss'
import logo from '../../assets/logo.png'
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

    return (
        <div>
            <footer class="footer-distributed">

<div class="footer-right">

  <a href="https://www.instagram.com/nutribit_/" target="_blank" rel="noopener noreferrer"><Instagram className="icon"/></a>
  <a href="https://www.linkedin.com/in/jaafaryassine/" target="_blank" rel="noopener noreferrer"><LinkedIn className="icon"/></a>
  <a href="https://github.com/jfryassine" target="_blank" rel="noopener noreferrer"><GitHub className="icon"/></a>

</div>

<div class="footer-left">

  <p class="footer-links">
    <a href='#' class="link-1" onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}><img className='logo_footer' src={logo}/></a>
  </p>

  <p>{t('copyright')} <a className="jy" href='http://www.jaafaryassine.me'>jy.</a></p>
</div>

</footer>
        </div>
    )
}
