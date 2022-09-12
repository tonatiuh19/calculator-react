import React, { useState } from "react";
import "./Calculator.css";
import ButtonCalculator from "../../components/ButtonCalculator/ButtonCalculator";
import DisplayCalculator from "../../components/DisplayCalculator/DisplayCalculator";
import { Calculation } from "../../interfaces/Calculation.interface";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [displayState, setDisplayState] = useState(true);
  const [tempData, setTempData] = useState("");
  const [calc, setCalc] = useState<Calculation | any>({
    firstValue: "",
    symbol: "",
    secondValue: "",
  });

  const makingCalc = () => {
    let result = (window as any).eval(
      calc.firstValue + calc.symbol + calc.secondValue
    );
    setCalc({
      firstValue: result,
      symbol: "",
      secondValue: "",
    });
    setTempData(result);
    setDisplay(result);
    setDisplayState(true);
  };

  return (
    <div className="square-container">
      <div className="display">
        <DisplayCalculator
          value={display}
          tempValue={tempData}
          state={displayState}
        />
      </div>
      <div className="buttons-row">
        <ButtonCalculator
          customFunction={() => {
            setDisplay("0");
            setDisplayState(true);
            setCalc({
              firstValue: "",
              symbol: "",
              secondValue: "",
            });
          }}
          type="c"
          title="C"
        />
      </div>
      <div className="buttons-row">
        {["7", "8", "9"].map((x) => {
          return (
            <div className="buttons-row-btn" key={x}>
              <ButtonCalculator
                customFunction={() => {
                  if (calc.firstValue === "") {
                    setCalc({ ...calc, firstValue: x });
                    setDisplay(x);
                  } else if (displayState) {
                    setCalc({ ...calc, firstValue: `${calc.firstValue}${x}` });
                    setDisplay(`${calc.firstValue}${x}`);
                  } else if (!displayState && calc.firstValue !== "") {
                    setCalc({
                      ...calc,
                      secondValue: `${calc.secondValue}${x}`,
                    });
                    setDisplay(`${calc.secondValue}${x}`);
                  }
                }}
                type="number"
                title={x}
              />
            </div>
          );
        })}
        <div className="buttons-row-btn">
          <ButtonCalculator
            customFunction={() => {
              setDisplayState(false);
              setCalc({ ...calc, symbol: "/" });
              if (tempData) {
              }
            }}
            type="symbol"
            title="/"
          />
        </div>
      </div>
      <div className="buttons-row">
        {["4", "5", "6"].map((x) => {
          return (
            <div className="buttons-row-btn" key={x}>
              <ButtonCalculator
                customFunction={() => {
                  if (calc.firstValue === "") {
                    setCalc({ ...calc, firstValue: x });
                    setDisplay(x);
                  } else if (displayState) {
                    setCalc({ ...calc, firstValue: `${calc.firstValue}${x}` });
                    setDisplay(`${calc.firstValue}${x}`);
                  } else if (!displayState && calc.firstValue !== "") {
                    setCalc({
                      ...calc,
                      secondValue: `${calc.secondValue}${x}`,
                    });
                    setDisplay(`${calc.secondValue}${x}`);
                  }
                }}
                type="number"
                title={x}
              />
            </div>
          );
        })}
        <div className="buttons-row-btn">
          <ButtonCalculator
            customFunction={() => {
              setDisplayState(false);
              setCalc({ ...calc, symbol: "*" });
            }}
            type="symbol"
            title="x"
          />
        </div>
      </div>
      <div className="buttons-row">
        {["1", "2", "3"].map((x) => {
          return (
            <div className="buttons-row-btn" key={x}>
              <ButtonCalculator
                customFunction={() => {
                  if (calc.firstValue === "") {
                    setCalc({ ...calc, firstValue: x });
                    setDisplay(x);
                  } else if (displayState) {
                    setCalc({ ...calc, firstValue: `${calc.firstValue}${x}` });
                    setDisplay(`${calc.firstValue}${x}`);
                  } else if (!displayState && calc.firstValue !== "") {
                    setCalc({
                      ...calc,
                      secondValue: `${calc.secondValue}${x}`,
                    });
                    setDisplay(`${calc.secondValue}${x}`);
                  }
                }}
                type="number"
                title={x}
              />
            </div>
          );
        })}
        <div className="buttons-row-btn">
          <ButtonCalculator
            customFunction={() => {
              setDisplayState(false);
              setCalc({ ...calc, symbol: "-" });
            }}
            type="symbol"
            title="-"
          />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-row-btn">
          <ButtonCalculator
            customFunction={() => {
              if (calc.firstValue === "") {
                setCalc({ ...calc, firstValue: "0" });
                setDisplay("0");
              } else if (displayState) {
                setCalc({ ...calc, firstValue: `${calc.firstValue}${"0"}` });
                setDisplay(`${calc.firstValue}${"0"}`);
              } else if (!displayState && calc.firstValue !== "") {
                setCalc({
                  ...calc,
                  secondValue: `${calc.secondValue}${"0"}`,
                });
                setDisplay(`${calc.secondValue}${"0"}`);
              }
            }}
            type="number"
            title="0"
          />
        </div>
        <div className="buttons-row-btn">
          <ButtonCalculator
            customFunction={() => {
              if (calc.firstValue === "") {
                setCalc({ ...calc, firstValue: "." });
                setDisplay(".");
              } else if (displayState) {
                setCalc({ ...calc, firstValue: `${calc.firstValue}${"."}` });
                setDisplay(`${calc.firstValue}${"."}`);
              } else if (!displayState && calc.firstValue !== "") {
                setCalc({
                  ...calc,
                  secondValue: `${calc.secondValue}${"."}`,
                });
                setDisplay(`${calc.secondValue}${"."}`);
              }
            }}
            type="symbol"
            title="."
          />
        </div>
        <div className="buttons-row-btn">
          <ButtonCalculator
            type="symbol"
            title="="
            customFunction={() => {
              setDisplayState(true);
              makingCalc();
            }}
          />
        </div>
        <div className="buttons-row-btn">
          <ButtonCalculator
            customFunction={() => {
              setDisplayState(false);
              setCalc({ ...calc, symbol: "+" });
            }}
            type="symbol"
            title="+"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
