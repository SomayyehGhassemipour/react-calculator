
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
    result: 0
  });

  const resetClickHandler =() => {
    setCalc({
      sign: "",
    number: "0",
    result: 0
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
      result: !calc.sign ? 0 : calc.result
    })
  }

  const commaClickHandler = (e) => {
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      number: !calc.number.toString().includes(".") ? calc.number + value : calc.number
    })
  }

  return (
    <div className="App">
      <Wrapper>
        <Screen value={calc.number}/>
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
                  : (btn !=="+ -" && btn !== "%" && btn !== "+" && btn !== "-"&& btn !== "x"&& btn !== "/"&& btn !== "=")
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
