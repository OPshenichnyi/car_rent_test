import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./App.styled";
import { GlobalStyle } from "./components/common/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
