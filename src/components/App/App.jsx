import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "../Redux/store";
import Home from "../../pages/Home";
import CategoriesPage from "../../pages/CategoriesPage";
import LoginPage from "../../pages/LoginPage";
<<<<<<< HEAD
import CartPage from "../../pages/CartPage";
=======
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/login/" element={<LoginPage />} />
<<<<<<< HEAD
          <Route path="/checkout/cart/" element={<CartPage />} />
=======
>>>>>>> 9a4b1ff3207dad4ce3e01bc6e1c37f2c99b3efe4
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;