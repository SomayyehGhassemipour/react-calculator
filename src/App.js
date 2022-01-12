
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Screen value="0"/>
        <ButtonBox>
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
