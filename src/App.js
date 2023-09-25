import Home from "./component/home/home";
import Nav from './component/navbar/navbar';
import './App.css';
import Cart from "./component/cart/cart";
import {Provider} from 'react-redux';
import store from "./component/store/store"
import Product from "./component/products/product";
import Productcard from './component/productcard/productcard';
import Footer from './component/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SNEAKER from "./component/sneaker/sneaker";
function App() {
  return (
    <div className="App">
 <Provider store={store}>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/productcard/:id" element={<Productcard/>}/>
    <Route path="/sneaker" element={<SNEAKER/>}/>
    </Routes>
  <Footer/>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
