
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  ["C","+ -","%","+"],
  ["1","2","3","-"],
  ["4","5","6","x"],
  ["7","8","9","/"],
  ["0",".","="]
];
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Screen value="0"/>
        <ButtonBox>
        {
            btnValues.flat().map((btn, i) => {
              return (
                <Button
                key={i}
                className={(`btn${i}`)}
                value={btn}
                onClick={() => { console.log(`${btn} clicked!`) }}
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
