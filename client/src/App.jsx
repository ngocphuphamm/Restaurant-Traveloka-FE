// css

import './App.css';


// react
import { Routes, Route,Navigate } from "react-router-dom";
import Product from "./feature/Product/product";
import ProductDetails from "./feature/Product/productDetail";
import Menu from "./feature/Menu/menuFood";
import Layout from './layout/layout';
import PageCart from './feature/PageCart/pageCart';
import Bill from "./feature/bill/bill";
import Search from '../src/feature/search/search';
import Payment from './feature/bill/payment';
import PageStripe from './feature/bill/pageStripe';
import SuccessBill from './feature/bill/successBill';
import LayoutAdmin from './layout/layoutAdmin';
import Dashboard from "./feature/admin/dashboard/dashboard";
import RestaurantAdmin from './feature/admin/Restaurant/restaurant';
import EditRestaurantAdmin from './feature/admin/Restaurant/editRestaurant';
import CreateRestaurant from './feature/admin/Restaurant/createRestaurant';
import EditImageRestaurant from './feature/admin/Restaurant/editImageRestaurant';
function App() {
  
  const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));

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
        <Route path="bill/payment/stripe" element={<PageStripe />} />
        <Route path="bill/payment/success" element={<SuccessBill />} />

        <Route path="/admin" element={infoLogin?infoLogin.type === "PARTNER" ? <LayoutAdmin /> : <Navigate to="/"/>:<Navigate to="/"/>}>
					<Route
				    path=	"dashboard/:idRestaurant"
						element={<Dashboard/>}
					>
					</Route>
          <Route
				    path=	"restaurant"
						element={<RestaurantAdmin/>}
					>
					</Route>
          <Route
            path="restaurant/edit/:idRestaurant"
            element={<EditRestaurantAdmin/>}
            >
              
            </Route>
            <Route
            path="restaurant/create"
            element={<CreateRestaurant/>}
            >
              
            </Route>
            <Route
            path="restaurant/editImage/:idImage"
            element={<EditImageRestaurant/>}
            >
              
            </Route>
			</Route>

      </Routes>
    
    </>

  );
}

export default App;
