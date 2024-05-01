import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { productsData } from "./Api/Api";
import Signin from "./Pages/Signin";
import Cart from "./Pages/Cart";
import Registration from "./Pages/Registration";
// import Checkout from "./Pages/Checkout";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* <Route path="/checkout" element={<Checkout />}></Route> */}
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
