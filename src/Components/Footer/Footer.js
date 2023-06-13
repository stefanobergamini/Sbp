import React from 'react'
import linkLogo from '../../Assets/imgs/linkedin.png'
import gitLogo from '../../Assets/imgs/git-logo.png'
import email from '../../Assets/imgs/email.png'
import telefone from '../../Assets/imgs/telefone.png'

import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="button" href="/">
          <img src={email} alt="Button 1" />
            <span>Email</span>
            <span>stefano.bpoletto@gmail.com</span>
        </div>
        <div class="button" href="/">
          <img src={telefone} alt="Button 2" />
            <span>Telefone</span>
            <span>+55 (48) 99694-4035</span>
        </div>
        <a class="button" href="https://www.linkedin.com/in/stefanobp/" target="_blank" rel="noreferrer">
          <img src={linkLogo} alt="Button 3" />
            <span>LinkedIn</span>
            <span>@stefanobp</span>
        </a>
        <a class="button" href="https://github.com/stefanobergamini/Sbp" target="_blank" rel="noreferrer">
          <img src={gitLogo} alt="Button 3" />
            <span>GitHub</span>
            <span>@stefanobergamini</span>
        </a>
      </div>
    </footer>
  )
}
