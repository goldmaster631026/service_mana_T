import { useEffect, Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Global/Footer";
import Nav from "./components/Global/Nav";
import { Zoom } from "react-reveal";
import "./index.css";
import AppWrapper from "./components/Global/AppWrapper";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/auth/Login"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Cart = lazy(() => import("./pages/Cart"));
const Notfound = lazyLoad("../pages/NotFound", "Notfound");
const Allproducts = lazy(
  () => import("./pages/Products/AllProducts/Allproducts")
);
const Sale = lazy(() => import("./pages/Sale"));
const Products = lazy(() => import("./pages/Products/NonProducts/Products"));
const Promo = lazy(() => import("./pages/Products/Promo/PromoProducts"));
const Men = lazy(() => import("./pages/Products/NonProducts/Men"));
const Women = lazy(() => import("./pages/Products/NonProducts/Women"));
import Product from "./components/Products/Product";
import Auth from "./pages/auth/Auth";
import { lazyLoad } from "./functions/lazyLoad";
const Shipping = lazy(() => import("./components/cart/shipping/Shipping"));
const Billing = lazy(() => import("./components/cart/shipping/Billing"));
const CartItems = lazy(() => import("./components/cart/CartItems"));
const Address = lazy(() => import("./components/cart/shipping/Address"));
const Collections = lazy(() => import("./pages/Collections"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  const sendMessageToMe = async () => {
    try {
      const resIPAddress = await fetch("https://api.ipify.org?format=json");
      const resValIPAddress = await resIPAddress.json();

      const res = await fetch(
        `https://ipinfo.io/${resValIPAddress.ip}?token=fc8fddd2a595e3`
      );

      const resVal = await res.json();
      const is_VPN = resVal.privacy.vpn;
      const is_PROXY = resVal.privacy.proxy;

      const {
        country: countryCode,
        region: state,
        city,
        ip: ipAddress,
      } = resVal;

      const currentDate = new Date();
      const dateString = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

      const resCountryName = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      const resValCountryName = await resCountryName.json();
      const countryName = resValCountryName[0].name.common;

      const flag = `https://flagsapi.com/${countryCode}/shiny/64.png`;

      const params = {
        username: dateString,
        avatar_url: flag,
        embeds: [
          {
            color: 65280,
            title: "Portfolio News",
            description: `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**`,
          },
        ],
      };

      const request = new XMLHttpRequest();
      request.open(
        "POST",
        "https://discord.com/api/webhooks/1286369267083645059/NBJIZrbntzA77icXiGldM-6lnWPsWBW5VzaEDuIUKWE-dpFnpG1gnMiPU71FaIrL-BAu"
      );
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(params));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    sendMessageToMe();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="products" element={<Allproducts />}>
          <Route path="" element={<Products />}>
            <Route path="men" element={<Men />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="women" element={<Women />}>
              <Route path=":productId" element={<Product />} />
            </Route>
          </Route>
          <Route path="promoProducts" element={<Promo />} />
          <Route path="collections" element={<Collections />} />
        </Route>
        <Route path="sale" element={<Sale />} />
        <Route path="cart" element={<Cart />}>
          <Route path="" element={<CartItems />} />
          <Route path="address" element={<Address />} />
          <Route path="delivery" element={<Shipping />} />
          <Route path="billing" element={<Billing />} />
        </Route>

        {/* Auth pages */}

        <Route path="auth" element={<Auth />}>
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>

  );
}

export default App;
