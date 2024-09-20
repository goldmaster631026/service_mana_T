import { TextField } from "@material-ui/core";
import YoumayLikes from "../components/Global/YoumayLikes";
import SummaryField from "../components/cart/SummaryField";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Outlet, useLocation } from "react-router-dom";
import { capitalizeLetter1 } from "../functions/capitalizeLetter1";
import { memo, useEffect, useState } from "react";

const Cart = () => {
  const location = useLocation();

  const [locationUrls, setLocationUrls] = useState([
    {
      name: "Cart",
      active: false,
    },
    {
      name: "Address",
      active: false,
    },
    {
      name: "Delivery",
      active: false,
    },
    {
      name: "Billing",
      active: false,
    },
  ]);

  const [mobile, setMobile] = useState(window.innerWidth > 650);

  useEffect(() => {
    window.addEventListener("resize", () => setMobile(window.innerWidth > 650));
    return () =>
      window.removeEventListener("resize", () =>
        setMobile(window.innerWidth > 650)
      );
  }, [mobile]);

  useEffect(() => {
    setLocationUrls((prevUrls) => {
      return prevUrls.map((url) => {
        return url.name.toLowerCase() == capitalizeLetter1(location.pathname)
          ? { ...url, active: true }
          : url;
      });
    });
  }, [location]);

  return (
    <div className="w-full h-fit py-4 flex flex-col items-center justify-center gap-2 bg-white px-2 circleLg:border-t ">
      <div className="w-full h-full pt-[1rem] flex justify-start items-center pl-[1rem] gap-2 bg-white lsm:px-8 xl:px-20 2xl:px-24">
        {location.pathname != "/cart" && location.pathname != "/cart/" && mobile
          ? locationUrls.map((url, index) => {
              return (
                <div
                  className={`w-fit text-2xl font-bold ${
                    url.active ? "text-[rgb(10,8,58)]" : "text-slate-400"
                  } flex items-center justify-center gap-2 circleLg:text-3xl`}
                  key={index}
                >
                  <span>{url.name}</span>
                  {index != 3 && <IoMdArrowDropright />}
                </div>
              );
            })
          : !mobile && (
              <div className="w-full text-2xl font-bold text-[rgb(10,8,58)] 2xl:text-lg flex items-center justify-center gap-2">
                {capitalizeLetter1(location.pathname, true)}
              </div>
            )}
      </div>
      <div className="w-full h-fit grid place-items-center gap-8 circleLg:grid-cols-[60%_40%] circleLg:pt-[3rem] mini2xl:px-[3rem] 2xl:px-[7rem]">
        <Outlet />
        <div className="w-full h-fit flex flex-col items-center justify-center gap-3 xlssm:w-[90%] self-start md:border border-gray-300 md:py-[2rem] circleLg:justify-self-start ">
          <div className="w-full h-fit grid place-items-center gap-4 border-b border-gray-300 pb-6 mb-6 md:w-[90%] md:grid-cols-2 md:pb-[3rem]">
            <div className="w-full h-full flex md:col-span-2 md:row-start-3">
              <TextField
                label="promo code"
                variant="outlined"
                className="w-[70%] text-white"
                InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
              />
              <button className="button hover:buttonOutline py-1 w-[30%] hover:w-[30%] hover:py-1">
                Apply
              </button>
            </div>
            <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-4xl justify-self-start md:col-span-2 md:row-start-1 md:text-3xl md:justify-self-center">
              Order Summary
            </span>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2 md:col-span-2 md:gap-4">
              <SummaryField label="Total products" value={180} />
              <SummaryField label="Shipping costs" value={25} />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col items-center gap-3 md:w-[90%] md:gap-10">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2 md:gap-4">
              <SummaryField label="Shipment" value={180} />
              <SummaryField label="Applied promo code" value={30} />
              <SummaryField label="Total" value={150} />
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
              <button className="button hover:buttonOutline">
                Proceed to Checkout
              </button>
              <button className="buttonOutline hover:button">
                Member Checkout
              </button>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2 md:items-start">
              <span className="text-[rgb(10,8,58)] text-sm poppins font-bold">
                Accepted payment methods
              </span>
              <div className="w-full h-full flex justify-center items-center gap-4 md:justify-start md:pl-2 md:gap-8">
                {["payment1.png", "payment2.png", "payment3.png"].map(
                  (src, index) => {
                    return (
                      <img
                        src={import.meta.env.VITE_MEDIA_STORAGE_URL! + src}
                        key={index}
                        className={`w-14 h-12 ${index == 0 && "scale-150"} ${
                          index == 1 && "h-5"
                        }`}
                        alt=""
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <span className="w-full flex items-center justify-start poppins font-bold text-sm text-[rgb(10,8,58)] md:w-[90%] md:hidden ">
            <IoMdArrowDropleft />
            continue shopping
          </span>
        </div>
        <span className="w-[92%] items-center justify-start poppins font-bold text-base text-[rgb(10,8,58)] hidden md:flex circleLg:hidden">
          <IoMdArrowDropleft />
          continue shopping
        </span>
      </div>
      {location.pathname == "/cart" || location.pathname == "/cart/" ? (
        <YoumayLikes />
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(Cart);
