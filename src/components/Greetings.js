import React from 'react'

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
    <div>
        <p>{greetings}</p>
    </div>
  )
}

export default Greetings