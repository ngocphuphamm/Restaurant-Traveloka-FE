// css

import './App.css';


// react
import { Routes, Route } from "react-router-dom";
import Product from "./feature/Product/product";
import ProductDetails from "./feature/Product/productDetail";
import Menu from "./feature/Menu/menuFood";
import Layout from './layout/layout';
import PageCart from './feature/PageCart/pageCart';
import Bill from "./feature/bill/bill";
import Search from '../src/feature/search/search';
import Payment from './feature/bill/payment';
function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Product />} />
          <Route path='restaurant/:id' element={<ProductDetails />} />
          <Route path='foodRestaurant/:id' element={<Menu />}></Route>
          <Route path='cart' element={<PageCart />}></Route>
          <Route path="search" element={<Search />}></Route>
         </Route>

        <Route path="bill" element={<Bill />} />
        <Route path="bill/payment" element={<Payment />} />

      </Routes>
    </>

  );
}

export default App;
