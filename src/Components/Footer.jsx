import React from 'react'   

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
          <a href="#"> Facebook</a>
        </li>
        <li>
          <a href="#"> Instragram</a>
        </li>
        <li>
          <a href="#"> Twitter</a>
        </li>
      </ul>
      <div>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div className='flex gap-2'>
          <p className='font-playfair font-thin'>Have questions? We're here to help.</p>
          <a href="#" className='font-lato font-medium'>Talk to a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
