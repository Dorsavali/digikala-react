import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "../Redux/store";
import Home from "../../pages/Home";
import CategoriesPage from "../../pages/CategoriesPage";
import LoginPage from "../../pages/LoginPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/login/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;