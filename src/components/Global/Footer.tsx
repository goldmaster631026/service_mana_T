import { useCallback, useState } from "react";
import Socials from "./Socials";
import { KeyboardArrowUp } from "@mui/icons-material";
import Accordion from "../Landing/Accordion";
import { Fade, Flip } from "react-reveal";
import { useResponsive } from "../../hooks/useResponsive";

const Footer = () => {
  const [accordionData, setAccordionData] = useState([
    {
      summary: "Home",
      links: [
        { link: "Support Center", to: "support" },
        { link: "Customer Support", to: "support" },
        { link: "Copyright", to: "copyright" },
        { link: "Popular Campaign", to: "campaign" },
      ],
      isActive: false,
    },
    {
      summary: "Our Information",
      links: [
        { link: "Return Policy", to: "returnPolicy" },
        { link: "Privacy Policy", to: "privacyPolicy" },
        { link: "Terms and Conditions", to: "termsAndConditions" },
        { link: "Site Map", to: "siteMap" },
        { link: "Store Hours", to: "storeHours" },
      ],
      isActive: false,
    },
    {
      summary: "My Account",
      links: [
        { link: "Press Inquiries", to: "presInquiries" },
        { link: "Social Media Directories", to: "socialMediaDir" },
        { link: "Permission", to: "permission" },
        { link: "Requests", to: "requests" },
      ],
      isActive: false,
    },
  ]);

  const [
    tablet,
    miniLaptop,
    laptop,
    mobile,
    smallMobile,
    catMiniLaptop,
    desktop,
    newArrMobile,
    largeTablet,
  ] = useResponsive();

  const handleAccordionMoves = useCallback((summary: string) => {
    setAccordionData((prevData) => {
      return prevData.map((data) => {
        if (data.isActive) data.isActive = false;
        return data.summary == summary
          ? data.isActive
            ? { ...data, isActive: false }
            : { ...data, isActive: true }
          : data;
      });
    });
  }, [accordionData]);

  return (
    <footer className="w-full h-[100vh] bg-white flex flex-col md:grid md:grid-cols-footer md:grid-rows-footer md:place-content-center md:place-items-center md:h-[60vh] md:self-center">
      <Fade left>
        <div className="w-full h-[20%] flex items-end justify-center pb-6 border md:border-none md:w-fit md:h-[80%] md:flex md:flex-col md:items-start md:gap-4 md:p-0 ">
          {mobile && (
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"Logo.svg"}
              alt="logo"
              className="w-[2rem] lg:w-[3rem] transition-all  xs:w-[1.5rem]"
            />
          )}
          <span className="text-lg text-gray-800 text-center px-14 md:px-0 md:text-start">
            Our shop is the best choice for buying footwear.
          </span>
          {mobile && <Socials section="footer" />}
        </div>
      </Fade>
      <Flip top>
        <div className="h-fit w-full border md:border-none flex flex-col items-center justify-center py-8 gap-8 md:w-[90%] md:h-[80%] md:flex-row md:gap-0 ">
          {accordionData.map((data) => {
            const { summary, links, isActive } = data;
            return (
              <Accordion
                summary={summary}
                links={links}
                key={summary}
                isActive={isActive}
                handleChange={handleAccordionMoves}
              />
            );
          })}
        </div>
      </Flip>
      <div className="w-full h-[30%] flex flex-col items-center justify-center gap-6 md:h-full md:col-span-2 md:border-t-2 md:flex-row md:items-center md:justify-between ">
        {!mobile && <Socials section="footer" />}
        <p className="text-center text-md text-gray-700 px-4 md:p-0 md:text-base">
          © 2021 Shop. Made with love for thray{" "}
        </p>
        <a href="#top">
          <KeyboardArrowUp
            fontSize="large"
            className="text-white rounded-full p-1 bg-[#A4A4A3] animate-Flip "
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
