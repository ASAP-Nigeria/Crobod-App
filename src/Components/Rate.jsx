import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function Rate() {
  return (
    <section id="rate">
        <div className='rate-card'>
            <div className='first-input'>
                <label htmlFor="pick">Pick up</label><br />
                <input type="text" name="pick" id="pick" placeholder='Nigeria'/>
                <img src="../images/Nigeria (NG).png" alt="" />
                <FontAwesomeIcon icon={faChevronDown} className="rate-icon"/>
            </div>
            <div className='second-input'>
                <label htmlFor="destination">Destination</label><br/>
                <input type="text" name="destination" id="destination" placeholder='Select Country'/>
                <FontAwesomeIcon icon={faChevronDown} className="rate-icon"/>
            </div>
            <div>
                <label htmlFor="item">Item Weight</label><br />
                <input type="text" name="item" id="item" />
            </div>
            <div className="third-input">
                <input type="text" name="" id="text" placeholder='City'/>
                <img src="../images/vector.png" alt="" />
                <FontAwesomeIcon icon={faChevronDown} className="rate-icons"/>
            </div>
            <div className="third-input">
                <input type="text" name="" id="text" placeholder='City'/>
                <img src="../images/vector.png" alt="" />
                <FontAwesomeIcon icon={faChevronDown} className="rate-icons"/>
            </div>
        </div>
        <button className='rate-btn'>Get a Rate</button>
    </section>
  )
}
