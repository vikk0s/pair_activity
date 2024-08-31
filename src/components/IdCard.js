import React from 'react'
import './Components.css'

const IdCard = (props) => {
  return (
    <div className='IdCard'>
      <img src={props.picture} />
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard

