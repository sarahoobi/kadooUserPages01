// این App.css رو تو main.jsx گرفتی

// import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home.jsx";
import Help from "./pages/Help.jsx";
import ShopList from "./pages/ShopList.jsx";
import ShopSingle from "./pages/ShopSingle.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import CheckCom from "./pages/CheckoutComplete.jsx";
import BlogList from "./pages/BlogList.jsx";
import BlogSingle from "./pages/BlogSingle.jsx";
import SamplePage from "./pages/SamplePage.jsx";
import UserMessage from "./pages/UserMessage.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import UserSetting from "./pages/UserSetting.jsx";
import OderDetails from "./pages/OderDetails.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="shop" element={<ShopList />} />
        <Route path="shop-single" element={<ShopSingle />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout-complete" element={<CheckCom />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog-single" element={<BlogSingle />} />
        <Route path="sample" element={<SamplePage />} />
        <Route path="usermessage" element={<UserMessage />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="userdash" element={<UserDashboard />} />
        <Route path="usersetting" element={<UserSetting />} />
        <Route path="oderdetails" element={<OderDetails />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
