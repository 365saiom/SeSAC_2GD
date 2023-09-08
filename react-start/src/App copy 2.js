import logo from './logo.svg';
import styled, { keyframes } from "styled-components";
import './styles/style.scss'

function App() {
  const rotate = keyframes`
   0%{
      transform: rotate(0);
    }
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  `;
  const RootDiv = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  `;
  const AppHeader = styled.div`
  `;
  const AppLogo = styled.img`
  width: 100%;
  animation: ${rotate} 10s infinite linear;
  `;
  const MyA = styled.div`
  text-align: center;
  color: #61dafb;
  `;
  return (
<RootDiv> 
  <AppHeader>
    <AppLogo src={logo} alt="app" />
        <p> Styled 적용을 위해 변경 된 App.js Edi <code> src/App.js </code> and save to reload.
        </p>
        <MyA href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </MyA>
  </AppHeader>
  <h1>hi</h1>
</RootDiv> 
);
}
export default App;