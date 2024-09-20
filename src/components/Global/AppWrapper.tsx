import { FC, ReactNode, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { Zoom } from "react-reveal";

const NavWrapper = () => {
  const location = useLocation();

  return (
    <>
      <div
        className={`flex flex-col w-screen h-fit overflow-x-hidden transition-all duration-700 relative`}
        style={{
          background: `${
            location.pathname != "/about" ? "#f5f5f5" : "rgb(10,8,58)"
          }`,
        }}
      >
        <Nav />
        <Suspense
          fallback={
            <div className="w-screen h-screen bg-white sticky flex items-center justify-center top-0 z-[1999]">
              <Zoom>
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Logo.svg"}
                  alt=""
                />
              </Zoom>
            </div>
          }
        >
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default NavWrapper;
