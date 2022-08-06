import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom"
import Pay from "./components/Pay";
import Success from "./components/Success";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:category' element={<ProductList />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/stripe'>
      <Route path='pay' element={<Pay />} />
      <Route path='success' element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
