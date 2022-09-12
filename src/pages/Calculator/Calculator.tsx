import React, { useState } from 'react';
import './Calculator.css';
import ButtonCalculator from '../../components/ButtonCalculator/ButtonCalculator';
import DisplayCalculator from '../../components/DisplayCalculator/DisplayCalculator';
import { Calculation } from '../../interfaces/Calculation.interface';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [displayState, setDisplayState] = useState(true);
  const [tempData, setTempData] = useState('');
  const [calc, setCalc] = useState<Calculation | any>({
    firstValue: '',
    symbol: '',
    secondValue: ''
  });

  const makingCalc = () => {
    /*setDisplay(eval(calc.firstValue+calc.symbol+calc.secondValue));
    setDisplayState(true);*/
    console.log(calc);
  }

  return (
    <div className="square-container">
      <div className="display">
        <DisplayCalculator value={display} tempValue={tempData} state={displayState} />
      </div>
      <div className="buttons-row">
        <ButtonCalculator customFunction={() => setDisplay('0')} type='c' title='C' />
      </div>
      <div className="buttons-row">
        {
          ['7','8','9'].map((x) => {
            return (
              <div className="buttons-row-btn">
                <ButtonCalculator customFunction={() => {
                  display === '0' ? setDisplay(x) : setDisplay(`${display}${x}`);
                  if(calc.firstValue === ''){
                    setTempData({...calc, firstValue: x});
                  }else if(calc.secondValue === '' && calc.symbol !== ''){
                    setTempData({...calc, secondValue: x});
                  }
                  makingCalc();
                  }} type='number' title={x} />
              </div>
            );
          })
        }
        <div className="buttons-row-btn">
          <ButtonCalculator customFunction={() => {
              setDisplayState(!displayState);
              setTempData({...calc, symbol: '/'});
            }} type='symbol' title='/' />
        </div>
      </div>
      <div className="buttons-row">
        {
          ['4','5','6'].map((x) => {
            return (
              <div className="buttons-row-btn">
                <ButtonCalculator customFunction={() => display === '0' ? setDisplay(x) : setDisplay(`${display}${x}`)} type='number' title={x} />
              </div>
            );
          })
        }
        <div className="buttons-row-btn">
          <ButtonCalculator type='symbol' title='x' />
        </div>
      </div>
      <div className="buttons-row">
        {
          ['1','2','3'].map((x) => {
            return (
              <div className="buttons-row-btn">
                <ButtonCalculator customFunction={() => display === '0' ? setDisplay(x) : setDisplay(`${display}${x}`)} type='number' title={x} />
              </div>
            );
          })
        }
        <div className="buttons-row-btn">
          <ButtonCalculator type='symbol' title='-' />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-row-btn">
          <ButtonCalculator customFunction={() => display === '0' ? setDisplay('0') : setDisplay(`${display}${'0'}`)} type='number' title='0' />
        </div>
        <div className="buttons-row-btn">
          <ButtonCalculator customFunction={() => display === '0' ? setDisplay('.') : setDisplay(`${display}${'.'}`)} type='symbol' title='.' />
        </div>
        <div className="buttons-row-btn">
          <ButtonCalculator type='symbol' title='=' />
        </div>
        <div className="buttons-row-btn">
          <ButtonCalculator type='symbol' title='+' />
        </div>
      </div>
    </div>
  )
}

export default Calculator