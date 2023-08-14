import React from 'react'
import data from './data'

export default function Features() {
  return (
    <section id='features'>
        <h1>Features</h1>
        <div className="feature-cards">
            {data.map((item) => 
                <div className="card">
                    <img src="/icon.png" alt="" />
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                    <h6>{item.subText} {item.icon}</h6>
                </div>
            )}
        </div>
    </section>
  )
}
