import React from 'react'
import './Components.css'

const Random = (props) => {
    const randomValue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min

  return (
    <div className='Random'>Random value between {props.min} and {props.max} ={'>'} {randomValue}</div>
  )
}

export default Random