import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./App.styled";
import { GlobalStyle } from "./components/common/globalStyles.js";
import Main from "./components/Pages/Main";
import Home from "./components/Pages/Home";
import Catalog from "./components/Catalog/Catalog.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Main />}>
              <Route index element={<Catalog />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
