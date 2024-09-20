import { useEffect, useMemo, useState } from "react";
import DisplaySize from "../enums/DisplaySize";
import { useDebouncedCallback } from "use-debounce";

export const useResponsive = () => {
  const [tablet, setTablet] = useState(window.innerWidth >= DisplaySize.Tablet);
  const [desktop, setDesktop] = useState(
    window.innerWidth <= DisplaySize.Desktop
  );
  const [miniLaptop, setMiniLaptop] = useState(
    window.innerWidth >= DisplaySize.MiniLaptop
  );
  const [laptop, setLaptop] = useState(window.innerWidth >= DisplaySize.Laptop);
  const [mobile, setMobile] = useState(window.innerWidth >= DisplaySize.Mobile);
  const [smallMobile, setSmallMobile] = useState(
    window.innerWidth >= DisplaySize.SmallMobile
  );
  const [catMiniLaptop, setCatMiniLaptop] = useState(
    window.innerWidth >= DisplaySize.CatMiniLaptop
  );
  const [newArrMobile, setNewArrMobile] = useState(
    window.innerWidth <= DisplaySize.NewArrMobile
  );
  const [largeTablet, setLargeTablet] = useState(
    window.innerWidth <= DisplaySize.LargeTablet
  );

  const resizeDetect = () => {
    setTablet(window.innerWidth >= DisplaySize.Tablet);
    setMiniLaptop(window.innerWidth >= DisplaySize.MiniLaptop);
    setLaptop(window.innerWidth >= DisplaySize.Laptop);
    setMobile(window.innerWidth >= DisplaySize.Mobile);
    setSmallMobile(window.innerWidth >= DisplaySize.SmallMobile);
    setCatMiniLaptop(window.innerWidth >= DisplaySize.CatMiniLaptop);
    setDesktop(window.innerWidth <= DisplaySize.Desktop);
    setNewArrMobile(window.innerWidth <= DisplaySize.NewArrMobile);
    setLargeTablet(window.innerWidth <= DisplaySize.LargeTablet);
  };

  const debouncedVar = useDebouncedCallback(resizeDetect, 500);

  useEffect(() => {
    window.addEventListener("resize", debouncedVar, false);
    return () => window.removeEventListener("resize", debouncedVar, false);
  }, [
    tablet,
    miniLaptop,
    catMiniLaptop,
    laptop,
    mobile,
    smallMobile,
    desktop,
    newArrMobile,
    largeTablet,
  ]);

  return useMemo(() => {
    return [
      tablet,
      miniLaptop,
      laptop,
      mobile,
      smallMobile,
      catMiniLaptop,
      desktop,
      newArrMobile,
      largeTablet,
    ];
  }, [
    tablet,
    miniLaptop,
    laptop,
    mobile,
    smallMobile,
    catMiniLaptop,
    desktop,
    newArrMobile,
    largeTablet,
  ]);
};
