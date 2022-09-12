import React from 'react'
import { Display } from '../../interfaces/Display.interface';
import './DisplayCalculator.css';

const DisplayCalculator = ({value, state, tempValue}:Display) => {
  return (
    <div className={
        state ? 'container back-state' : 'container back-state-symbol'
    }>
        <div className='number-item number-temp'>{tempValue}</div>
        <div className='number-item'>{value}</div>
    </div>
  )
}

export default DisplayCalculator