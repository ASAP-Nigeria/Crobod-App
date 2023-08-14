import { useState } from 'react'
import React from 'react'
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function FAQ() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected == i) {
      return setSelected(null)
    } else {
      setSelected(i)
    }
  }
  return (
    <section id='faq'>
        <h1>Frequently asked questions</h1>
        <div className="accordion">
            {data.map((item, i) => 
            <div className="item">
              <div className="title">
                <h3>{item.question}</h3>
                <span className='icon'>{selected == i ? <FontAwesomeIcon icon={faChevronDown} onClick={() => toggle(i)}/> : <FontAwesomeIcon icon={faChevronUp} onClick={() => toggle(i)}/>}</span>
              </div>
              <div className={selected == i ? "content show" : "content"}>
                <p>{item.answer}</p>
              </div>
            </div>
            )}
        </div>

    </section>
  )
}
