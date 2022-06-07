import React from 'react'
import {Instagram,Telegram} from "@material-ui/icons"
import './footer.scss'
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

    return (
      <div>
      <footer class="footer-distributed">

<div class="footer-right">

<a href="https://www.instagram.com/nutribit_/" target="_blank" rel="noopener noreferrer"><Instagram className="icon"/></a>
<a href="https://www.linkedin.com/in/jaafaryassine/" target="_blank" rel="noopener noreferrer"><Telegram className="icon"/></a>


</div>

<div class="footer-left">

<p class="footer-links">
<a class="link-1" onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>nutribit</a>
</p>

<p>{t('copyright')} Jaafar Yassine</p>
</div>

</footer>
  </div>
    )
}
