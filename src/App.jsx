import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./App.styled";
import GlobalStyle from "./components/common/GlobalStyles";
import Main from "./components/Pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/catalog" element={<Main />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
