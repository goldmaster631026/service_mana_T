import { IoHeart } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { Zoom, Flip, Fade } from "react-reveal";

const UniqueProducts = () => {
  const theRatingStars: JSX.Element[] = [...Array(Math.floor(5))].map(
    (el: undefined, index: number) => {
      return <img src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Star 4.svg"} alt="" key={index} className="w-2" />;
    }
  );
  
  
  return (
    <div className="w-full h-fit bg-[#f5f5f5] flex flex-col items-center justify-center">
      <div className="w-full h-fit flex flex-col gap-[1rem] p-[3rem] minSm:w-fit minSm:items-center miniTablet:mb-[5rem] lgMd:mb-[10rem] xlarge:mb-[15rem] ">
        <Flip top duration={1000}>
          <span className="text-start text-xs text-[#FF3C78] uppercase font-bold block lg:text-base xlarge:text-lg">
            Features
          </span>
        </Flip>
        <Flip top duration={1000}>
          {" "}
          <h1 className="text-2xl text-[#0A083A] font-bold text-start lg:text-4xl xlarge:text-5xl minSm:text-center whitespace-nowrap">
            Unique products
          </h1>
        </Flip>
      </div>
      <div className="w-full h-fit relative flex flex-col items-center justify-center lssm: lssm:w-[90%] xlssm:w-[80%] miniTablet:w-full miniTablet:justify-between miniTablet:h-[60vh] xlarge:w-[95%] 2xl:max-w-[90%] ">
        {/* banners */}
        <Zoom>
          <div className="w-full h-fit flex flex-col items-center justify-center gap-24 miniTablet:flex-row ">
            {/* banner 1 */}

            <div className="w-full h-fit flex items-center relative miniTablet:rotate-[-90deg]">
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"uniques-arrow.svg"}
                alt=""
                className="w-14 h-14 absolute left-8 top-10 rotate-[-45deg] miniTablet:top-20 miniTablet:left-0 miniTablet:h-16 miniTablet:w-16 z-50 lg:w-24  lg:left-[2.5rem] lg:top-[12rem] mini2xl:left-[20%] mini2xl:w-40"
              />
              <div className="w-full h-56 flex items-center justify-center relative">
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"triangle2.svg"}
                  alt=""
                  className="w-[65%] absolute rotate-[-20deg] left-8 miniTablet:rotate-[80deg] max-w-none miniTablet:w-[120%] miniTablet:bottom-[6rem] miniTablet:left-0 lg:bottom-0 xlarge:w-[110%] xlarge:bottom-[5rem]"
                />
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"alexander.png"}
                  alt=""
                  className="w-[55%] max-w-none absolute rotate-[20deg] right-14 bottom-2 minSm:right-24 minSm:-bottom-4 miniTablet:rotate-[120deg] miniTablet:w-[90%] miniTablet:left-12 miniTablet:-top-4 lg:w-[100%] lg:left-[3rem] lg:-top-[9rem] xlarge:-top-[12rem] 2xl:-top-[18rem] 2xl:left-[0rem]"
                />
              </div>
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"uniques-arrow.svg"}
                alt=""
                className="w-12 h-12 absolute right-8 top-12 rotate-[45deg] miniTablet:top-20 miniTablet:-right-4 miniTablet:h-16 miniTablet:w-16 lg:w-24 lg:top-[12rem] lg:right-[1rem] mini2xl:right-[20%] mini2xl:w-40"
              />
            </div>

            {/* banner 2 */}

            <div className="w-full h-56 flex items-center justify-start  relative miniTablet:rotate-[-90deg] ">
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"uniques-arrow.svg"}
                alt=""
                className="w-14 h-14 absolute left-8 bottom-6 rotate-[-130deg] miniTablet:top-20 miniTablet:left-0 miniTablet:h-16 miniTablet:w-16 lg:w-24 lg:rotate-[-150deg] lg:top-0 lg:left-[3rem] mini2xl:left-[20%] mini2xl:w-[20%]"
              />
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"triangle1.svg"}
                alt=""
                className="w-[55%] max-w-none absolute rotate-[15deg] right-16 miniTablet:w-[120%] miniTablet:rotate-[110deg] miniTablet:top-[11rem] miniTablet:left-0 lg:w-[80%] lg:left-[12rem] lg:top-[5rem]"
              />
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"alexander1.png"}
                alt=""
                className="w-[55%] absolute rotate-[20deg] right-20 bottom-6 minSm:-bottom-4 miniTablet:rotate-[130deg] miniTablet:w-[90%] miniTablet:left-10 miniTablet:top-16 lg:w-[70%] lg:left-[15rem] lg:rotate-[125deg] lg:top-[2rem] "
              />
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"uniques-arrow.svg"}
                alt=""
                className="w-12 h-12 absolute right-8 bottom-6 rotate-[130deg] miniTablet:top-20 miniTablet:-right-8 miniTablet:h-16 miniTablet:w-16 lg:w-24 lg:right-[1rem] lg:top-[-1rem] mini2xl:right-[20%] mini2xl:w-[20%]"
              />
            </div>
          </div>
        </Zoom>

        {/* ḅanners overlay */}

        <div className="w-full h-fit gap-2 absolute grid grid-cols-1 place-items-center xlssm:w-[80%] z-50 miniTablet:grid-cols-2 miniTablet:top-[-5rem] lgMd:top-[-10rem] xLgMd:w-[70%] ">
          {/* card 1 */}

          <Flip top delay={1000}>
            <div
              className="w-[9rem] h-[8rem] backdrop-blur-3xl rounded-md flex flex-col items-center justify-center p-3 miniSm:w-[50%] miniTablet:col-span-2 miniTablet:w-[30%] miniTablet:rounded-xl miniTablet:h-[10rem] mini2xl:w-[20%] "
              style={{
                background: `linear-gradient(90deg, rgba(249,235,222,1) 0%, rgba(245,222,207,1) 39%, rgba(246,204,181,1) 75%, rgba(244,198,170,1) 100%)`,
              }}
            >
              <div className="w-full flex justify-between items-start mb-2">
                <span className="text-[.6rem] font-bold text-white bg-[#FF3C78] px-[.2rem] py-[.1rem] rounded-lg">
                  -10%
                </span>
                <div className="w-[70%] relative flex items-center justify-center ">
                  <div className="w-[3rem] h-[3rem] rounded-full grid place-items-center bg-[#b700ff] before:w-[80%] before:h-[80%] before:rounded-full before:bg-[#ee82ee6f] before:border before:border-white miniSm:w-[4rem] miniSm:h-[4rem]"></div>
                  <img
                    src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"image 1.png"}
                    className="absolute rotate-[-20deg] scale-[1.1] right-[-.5rem] miniSm:scale-[1]"
                    alt=""
                  />
                </div>
                <IoHeart className="text-[#FF3C78]" />
              </div>
              <span className="text-xs text-[#0A083A] font-bold">
                Nike Air Max
              </span>
              <span className="text-xs text-[#426eff] font-bold">$320.00</span>
              <span className="flex gap-1">
                {theRatingStars} <b className="text-xs text-[#0A083A]">(5.0)</b>
              </span>
            </div>
          </Flip>

          {/* card 2 */}
          <Flip bottom delay={1900}>
            <div
              className="w-[12rem] h-[14rem] backdrop-blur-3xl relative rounded-md flex flex-col items-start justify-center gap-2 pl-3 miniSm:w-[50%] miniTablet:w-[40%] miniTablet:col-span-2 lg:w-[35%] lg:top-[-5rem] lg:right-[-1.5rem] xLgMd:h-[16rem] xLgMd:gap-3 lg:gap-4 mini2xl:h-[120%] mini2xl:w-[30%] "
              style={{
                background: `linear-gradient(90deg, rgba(249,235,222,1) 0%, rgba(245,222,207,1) 39%, rgba(246,204,181,1) 75%, rgba(244,198,170,1) 100%)`,
              }}
            >
              <span className="text-sm font-bold text-[#0A083A] xLgMd:text-base">
                Manage items
              </span>
              <div className="flex items-center justify-start gap-4 ">
                {[
                  { title: "orders", measurement: 3425 },
                  { title: "returns", measurement: 34.25 },
                ].map(({ title, measurement }, index) => {
                  return (
                    <div className="flex flex-col" key={index}>
                      <span className="text-[.6rem] font-semibold text-[#0A083A] uppercase xLgMd:text-xs">
                        {title}
                      </span>
                      <span className="text-base font-bold text-[#0A083A] xLgMd:text-lg">
                        ${measurement}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="w-[80%] h-fit flex justify-center items-center gap-2 ml-3 xLgMd:ml-0 xLgMd:w-full xLgMd:justify-between xLgMd:pr-4">
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"nikeShoes.jpg"}
                  alt=""
                  className="w-[30%] h-[2rem] rounded-md xLgMd:h-[3rem] 2xl:min-h-[4rem]"
                />
                <div className="flex flex-col items-start justify-center xLgMd:gap-1">
                  <span className="text-[.6rem] font-bold text-[#FF3C78] xLgMd:text-xs">
                    Running nike shoes
                  </span>
                  <div className="flex items-center justify-center gap-2 md:gap-1 xLgMd:gap-[1rem]">
                    <p className="flex items-center justify-center gap-1">
                      <span className="text-[rgb(10,8,58)] text-[.6rem] font-semibold xLgMd:text-xs lg:text-sm">
                        price:
                      </span>
                      <span className="text[rgb(10, 8, 58)] text-[.6rem] font-normal text-center xLgMd:text-xs lg:text-sm">
                        $456
                      </span>
                    </p>
                    <p className="flex items-center justify-center gap-1">
                      <span className="text-[rgb(10,8,58)] text-[.6rem] xLgMd:text-xs font-semibold">
                        QTY:
                      </span>
                      <span className="text[rgb(10, 8, 58)] text-[.6rem] xLgMd:text-xs font-normal">
                        2
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-fit h-fit p-1 border border-[#436cf3] rounded-full">
                  <FiEdit3 className="text-xs text-[#436cf3] xLgMd:text-sm" />
                </div>
              </div>
              <div className="w-[80%] h-fit flex justify-center items-center gap-2 ml-3 xLgMd:ml-0 xLgMd:w-full xLgMd:justify-between xLgMd:pr-4">
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"yeezyBoost.jpg"}
                  alt=""
                  className="w-[30%] h-[2rem] rounded-md xLgMd:h-[3rem] 2xl:min-h-[4rem] 2xl:max-h-[4rem]"
                />
                <div className="flex flex-col items-start justify-center xLgMd:gap-1">
                  <span className="text-[.6rem] font-bold text-[#FF3C78] xLgMd:text-xs">
                    Running nike shoes
                  </span>
                  <div className="flex items-center justify-center gap-2 md:gap-1 xLgMd:gap-[1rem]">
                    <p className="flex items-center justify-center gap-1">
                      <span className="text-[rgb(10,8,58)] text-[.6rem] font-semibold xLgMd:text-xs lg:text-sm">
                        price:
                      </span>
                      <span className="text[rgb(10, 8, 58)] text-[.6rem] font-normal text-center xLgMd:text-xs lg:text-sm">
                        $200
                      </span>
                    </p>
                    <p className="flex items-center justify-center gap-1">
                      <span className="text-[rgb(10,8,58)] text-[.6rem] xLgMd:text-xs font-semibold">
                        QTY:
                      </span>
                      <span className="text[rgb(10, 8, 58)] text-[.6rem] xLgMd:text-xs font-normal">
                        1
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-fit h-fit p-1 border border-[#436cf3] rounded-full">
                  <FiEdit3 className="text-xs text-[#436cf3] xLgMd:text-sm" />
                </div>
              </div>
              <button
                className="w-[6rem] h-[1.5rem] px-2 rounded-[.3rem] bg-[#FF3C78] font-medium text-white text-[.6rem] text-center whitespace-nowrap self-center xLgMd:text-xs xLgMd:w-[7rem] xLgMd:h-[2rem]"
                style={{
                  boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
                }}
              >
                Add new item
              </button>
            </div>
          </Flip>

          {/* card 3 */}
          <Fade left delay={500}>
            <div className="w-[11rem] h-[4rem] backdrop-blur-xl rounded-md before:content-[''] before:absolute before:w-full before:h-full before:bg-[#fcd0af51] before:blur-3xl flex items-center justify-center gap-2 px-2 miniSm:w-[50%] miniTablet:row-start-2 miniTablet:w-[70%] miniTablet:h-[5rem] miniTablet:relative miniTablet:left-[-5rem] miniTablet:rounded-lg lg:w-[50%] lg:justify-between lg:top-[-3rem] ">
              <div className="w-[70%] relative flex items-center justify-center lg:w-fit ">
                <div className="w-[2rem] h-[2rem] rounded-full grid place-items-center bg-[#b700ff] before:w-[80%] before:h-[80%] before:rounded-full before:bg-[#ee82ee6f] before:border before:border-white miniTablet:w-[3rem] miniTablet:h-[3rem]"></div>
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"image 1.png"}
                  className="absolute right-[-.5rem] scale-[1.1] miniTablet:scale-[1.3] lg:w-20"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-[.6rem] font-bold whitespace-nowrap text-white miniTablet:text-xs">
                  Air max Motion
                </span>
                <span className="text-xs text-[#426eff] font-bold miniTablet:text-base">
                  $320.00
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm bg-white w-4 h-4 rounded-full text-center flex items-center justify-center miniTablet:w-5 miniTablet:h-5 ">
                  +
                </span>
                <span className="text-sm text-center">1</span>
                <span className="text-sm text-white bg-[#426eff] w-4 h-4 rounded-full text-center flex items-center justify-center miniTablet:w-5 miniTablet:h-5">
                  -
                </span>
              </div>
            </div>
          </Fade>

          {/* card 4 */}
          <Fade right delay={1500}>
            <div className="w-[11rem] h-[5rem] backdrop-blur-3xl rounded-md before:content-[''] before:absolute before:w-full before:h-full before:bg-[#fcd0af51] before:blur-3xl flex items-center justify-between px-2 miniSm:w-[50%] miniTablet:col-start-2 miniTablet:row-start-2 miniTablet:relative miniTablet:w-full miniTablet:left-[-5.5rem] miniTablet:h-[7rem] lg:w-[70%] lg:left-[7rem] xlarge:w-[55%] xlarge:left-[9rem] ">
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"mcQueenWear.jpeg"}
                alt=""
                className="w-[35%] h-[70%] rounded-lg miniTablet:w-[50%] miniTablet:h-[85%]"
              />
              <div className="w-fit flex flex-col items-start justify-center gap-[.2rem] miniTablet:w-full miniTablet:pl-[.5rem]">
                <span className="text-[.6rem] whitespace-nowrap text-[rgb(10,8,58)] font-bold miniTablet:text-xs">
                  Nike Speed x234
                </span>
                <span className="text-[.5rem] whitespace-nowrap text-white miniTablet:text-[.6rem]">
                  category: performance
                </span>
                <p className="flex flex-col">
                  <span className="text-[.4rem] whitespace-nowrap text-[rgb(10,8,58)] miniTablet:text-[.5rem]">
                    Best for ergonomy & stability
                  </span>
                  <span className="text-[.4rem] whitespace-nowrap text-[rgb(10,8,58)] miniTablet:text-[.5rem]">
                    Preferred by atheletes
                  </span>
                </p>
                <div className="flex w-full h-fit items-center justify-between">
                  <span className="text-[.4rem] text-[#426eff] font-bold miniTablet:text-sm">
                    $320.00
                  </span>
                  <div className="flex flex-col items-center justify-center after:w-[2rem] after:h-[1rem] after:bg-[#3661fe] after:blur-[24px] after:absolute after:bottom-[-.2rem]">
                    <button className="px-4 py-[.2rem] mt-1 bg-[#3661fe] text-white text-[.4rem] rounded-md font-medium miniSm:mt-0  miniTablet:text-[.6rem]">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default UniqueProducts;
