import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer id='footer'>
        <div className="footer-content">
            <div className="column1">
                <img src="/logo1.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Phasellus vitae libero magna nisl scelerisque
                    nam fermentum. Sed odio nisl nisl tristique augue ut 
                    nulla. <br />
                    Commodo dignissim sed ultricies cursus eget 
                    semper malesuada. Egestas nisi, ut convallis amet, 
                    ultrices blandit.
                </p>
            </div>
            <div className="column2">
                <h4>Company</h4>
                <ul>
                    <li>Loan</li>
                    <li>About</li>
                    <li>Solution</li>
                </ul>
            </div>
            <div className="column3">
                <h4>Subscribe to Newsletter</h4>
                <div className="input">
                    <input type="email" name="" id="email" placeholder='Enter your email address'/>
                    <span><button>Subscribe</button></span>
                </div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
                    <FontAwesomeIcon icon={faLinkedinIn} className="social-icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
                    <FontAwesomeIcon icon={faFacebookF} className="social-icon"/>

                </div>
            </div>
        </div>
        <small>Copyright, {new Date().getFullYear()}</small>
        

    </footer>
  )
}
