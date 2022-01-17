
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import { useState } from 'react';

const btnValues = [
  ["C","+ -","%","+"],
  ["1","2","3","-"],
  ["4","5","6","x"],
  ["7","8","9","/"],
  ["0",".","="]
];
function App() {
  let [calc, setCalc] = useState({
    sign: "",
    number: "0",
    result: 0,
  });

  const resetClickHandler =() => {
    setCalc({
      sign: "",
    number: "0",
    result: 0,
    });
  }
  const numbersClickHandler = (e) => {
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      number: 
        calc.number === "0"
        ? value === "0"
        ? "0"
        : Number(calc.number + value)
        : calc.number + value,
      result: !calc.sign ? 0 : calc.result,
    })
    
  }

  const commaClickHandler = (e) => {
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      number: !calc.number.toString().includes(".") ? calc.number + value : calc.number,
      result: !calc.sign ? 0 : calc.result,
    })
    
  }

  const addSubClickHandler = (e) => {
    let value = e.target.innerHTML;
    value = value ==="x"? "*":value;
    setCalc({
      ...calc,
      result: calc.result && Number(calc.number)!==0
      ? eval(calc.result + calc.sign+ calc.number) 
      : calc.sign? calc.result : calc.number,
      number: "0",
      sign : value 
    });
  }

  const equalClickHandler = () => {
    setCalc({
      ...calc,
      result: calc.result ? eval(calc.result + calc.sign+ calc.number) : calc.number,
      number: "0",
      sign: ""
    })
  }

  let display =  calc.number==="0" && calc.sign==="" && calc.result===0? "0"
  : (calc.result?calc.result:"") + (calc.sign?calc.sign:"" ) + (calc.number!=="0"?calc.number: "")

  return (
    <div className="App">
      <Wrapper>
        <Screen value={display}/>
        <ButtonBox>
        {
            btnValues.flat().map((btn, i) => {
              return (
                <Button
                key={i}
                className={(`btn${i}`)}
                value={btn}
                onClick={
                  btn === "C" 
                  ? resetClickHandler
                  : btn === "." 
                  ? commaClickHandler
                  : btn === "+" || btn === "-" 
                  ? addSubClickHandler
                  : btn === "="
                  ? equalClickHandler
                  : (btn !=="+ -" && btn !== "%" && btn !== "=" && btn !== "x" && btn !== "/")
                  ? numbersClickHandler
                  : console.log("sign buttons Clicked!")
                }
                />
              )
            })
          }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
