import { MdFlight } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { catalogueData } from "../../data";
import Triangle from "../About/Triangle";
import Category from "./Category";
import { Zoom, Bounce } from "react-reveal";

const Catalogue = () => {
  return (
    <div className="w-full h-fit py-[4rem] bg-white flex flex-col items-center justify-center">
      <div className="w-full h-fit flex flex-col items-start justify-center gap-4 pl-6 miniSm:pl-8 xMiniTablet:pl-12 md:items-center">
        <Zoom>
          <span className="text-start text-[#FF3C78] text-sm uppercase font-bold md:text-center md:text-base">
            Catalogue
          </span>
          <span className="text-start text-[#0A083A] text-3xl font-bold xMiniTablet:text-4xl md:text-center">
            shop products by category
          </span>
        </Zoom>
        <Bounce top>
          <span className="text-start text-xs text-gray-600 font-semibold pr-14  lssm:text-sm md:text-center md:pr-0">
            We constantly update our products to stay tooned for new stuff.
          </span>
        </Bounce>
      </div>

      <Zoom>
        <div className="w-[85%] h-fit py-4 relative grid place-items-center gap-3 grid-rows-catalogue xlssm:grid-rows-catalogueXlsm md:grid-cols-3 md:grid-rows-catalogueMd lg:grid-rows-catalogueLarge mini2xl:grid-rows-catalogueMLarge 2xl:grid-rows-catalogue2Xl">
          {catalogueData.map((data) => {
            const { url, imgSrc, name, id } = data;
            return (
              <Category key={id} url={url} imgSrc={imgSrc} name={name} id={id} />
            );
          })}
          <div className="w-fit h-fit absolute rotate-[220deg] z-0 left-0 bottom-0 md:bottom-[18rem] md:left-10 grid grid-cols-2">
            <Triangle
              position={{ floatOr: "relative" }}
              id={1}
              rotation="100deg"
            />
            <Triangle
              position={{ left: 0, bottom: 0, floatOr: "relative" }}
              id={2}
              rotation="90deg"
            />
            <Triangle
              position={{ left: 0, bottom: 0, floatOr: "relative" }}
              id={3}
              rotation="90deg"
            />
          </div>
        </div>
      </Zoom>
      <Bounce top>
        <div className="w-[80%] h-fit pt-20 mt-20 flex flex-col items-center justify-center gap-2 border-t border-t-gray-300 miniTablet:w-[85%] miniTablet:flex-row miniTablet:gap-8">
          <div className="w-[80%] text-[#FF3C78] p-4 text-sm rounded-lg whitespace-nowrap flex bg-[#f5f5f5] gap-2 minSm:w-[15rem]">
            <MdFlight className="rotate-45 text-2xl" />{" "}
            <p>
              Want a discount ?
              <span className="underline font-bold whitespace-normal">
                Sign in or become a member
              </span>
            </p>
          </div>
          <div className="w-[80%] text-[#FF3C78] p-6 text-sm rounded-lg whitespace-nowrap flex bg-[#f5f5f5] gap-2 minSm:w-[15rem]">
            <AiFillFilePdf className="text-2xl" />{" "}
            <span className="underline font-bold whitespace-normal">
              Download catalogue
            </span>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Catalogue;
