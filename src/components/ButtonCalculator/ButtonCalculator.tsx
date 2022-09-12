import React from 'react'
import { Button } from '../../interfaces/Button.interface';
import './ButtonCalculator.css';

const ButtonCalculator = ({
    title,
    type,
    customFunction = () => {},
    state
}: Button) => {
    if(type === 'number'){
        return (
            <button className='number-button' onClick={customFunction}>{title}</button>
        );
    }else if(type === 'symbol'){
        return (
            <button className={state?.state ? 'symbol-button symbol-button-disabled' : 'symbol-button'} onClick={customFunction}>{title}</button>
        );
    }else{
        return (
            <button className='c-button' onClick={customFunction}>{title}</button>
        );
    }
}

export default ButtonCalculator