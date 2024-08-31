import React from 'react'
import './Components.css'

const Greetings = (props) => {
    let greetings = '';

    switch (props.lang) {
        case 'de':
            greetings = `Hallo ${props.children}`;
            break;
        case 'fr':
            greetings = `Bonjour ${props.children}`;
            break;
        default:
            greetings = `Hello there`
    }

  return (
    <div className='Greetings'>
        <p>{greetings}</p>
    </div>
  )
}

export default Greetings