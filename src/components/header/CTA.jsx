import React from 'react'
import CV from '../../assets/mcgillivray-resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Contact Me</a>
    </div>
  )
}

export default CTA