import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./components/common/globalStyles.js";
import Main from "./components/Pages/Main";
import Home from "./components/Pages/Home";
import FavoritesPage from "./components/Pages/FavoritesPage.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Main />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
