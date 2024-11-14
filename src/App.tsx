import styled from "styled-components";
import "./App.css";
import KakaoMap from "./KakaoMap";

function App() {
  return (
    <>
      <Imsi>
        <KakaoMap />
      </Imsi>
    </>
  );
}

export default App;

const Imsi = styled.div`
  width: 400px;
  height: 400px;
`;
