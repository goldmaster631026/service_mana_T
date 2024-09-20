import Testimonial from "./Testimonial";
import { Autoplay, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { designerTalksData, testimonialsData } from "../../data";
import SlideNextButton from "../Global/SlideNextButton";
import SlidePrevButton from "../Global/SlidePrevbutton";
import { useRef, useState } from "react";
import DesignerTalk from "./DesignerTalk";
import { Fade, Bounce } from "react-reveal";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  const [thirdSwiper, setThirdSwiper] = useState<any>(null);
  const [reachEnd, setReachEnd] = useState(false);
  return (
    <div className="w-full h-fit bg-[#0A083A] grid place-items-center gap-14 pt-[5rem] xMiniTablet:grid-cols-2 circleLg:pr-[5rem] lg:py-[10rem] lg:px-[5rem]">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4 xMiniTablet:col-start-2 xMiniTablet:items-start lg:w-[85%] 2xl:w-[70%]">
        <Bounce top>
          <span className="text-white text-lg font-bold text-center xMiniTablet:pl-4 lg:text-xl mini2xl:text-2xl">
            Customers Opinions
          </span>
        </Bounce>
        <Fade bottom delay={500}>
          <div className="w-[20rem] h-[10rem] grid place-items-center xMiniTablet:w-full mini2xl:h-[12rem]">
            <Swiper
              modules={[Controller, Autoplay]}
              slidesPerView={1}
              className="w-[90%] h-full"
              spaceBetween={10}
              autoplay={true}
              loop={true}
              onSwiper={setFirstSwiper}
              controller={{ control: [secondSwiper] }}
              onReachEnd={() => setReachEnd(true)}
              onReachBeginning={() => setReachEnd(false)}
            >
              {testimonialsData.map((testimony) => {
                const { customerName, rating, testimonial } = testimony;

                return (
                  <SwiperSlide className="w-full h-full" key={customerName}>
                    <Testimonial
                      customerName={customerName}
                      rating={rating}
                      testimonial={testimonial}
                    />
                    <SlideNextButton swipingButtonRefNext={swipingButtonRef} />
                    <SlidePrevButton
                      swipingButtonRefPrev={swipingButtonRefPrev}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Fade>
        <div className="flex gap-4 xMiniTablet:w-[80%] xMiniTablet:justify-end xMiniTablet:self-end xMiniTablet:mr-[5%]">
          <img
            src={
              import.meta.env.VITE_MEDIA_STORAGE_URL!!!! + reachEnd
                ? "arrow-left-circle-1.png"
                : "arrow-left-circle.png"
            }
            alt=""
            onClick={() => swipingButtonRefPrev.current?.click()}
            className={`${reachEnd ? "-rotate-180" : ""}`}
          />
          <img
            src={
              import.meta.env.VITE_MEDIA_STORAGE_URL!!!! + reachEnd
                ? "arrow-left-circle.png"
                : "arrow-left-circle-1.png"
            }
            alt=""
            onClick={() => swipingButtonRef.current?.click()}
            className={`${reachEnd ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* The second left-to-be-on-desktop card */}
      <Fade left>
        <div className="relative h-fit rounded-sm w-[20rem] miniSm:w-[25rem] xMiniTablet:row-start-1 xMiniTablet:row-span-2 xMiniTablet:h-full xMiniTablet:pl-[5rem] lg:w-full mini2xl:h-[120%] 2xl:w-[70%]">
          <Swiper
            modules={[Controller, Autoplay]}
            slidesPerView={1}
            className="h-full"
            spaceBetween={10}
            autoplay={true}
            loop={true}
            onSwiper={setSecondSwiper}
            controller={{ control: [thirdSwiper, firstSwiper] }}
          >
            {testimonialsData.map((testimony) => {
              const { customerName, rating, testimonial } = testimony;

              return (
                <SwiperSlide className="w-full h-full" key={customerName}>
                  <div
                    className="w-full h-[15rem] bg-cover bg-no-repeat xMiniTablet:h-[70%] xMiniTablet:w-[85%] md:w-full lg:h-[90%] "
                    style={{
                      backgroundImage: `url(${
                        import.meta.env.VITE_MEDIA_STORAGE_URL! +
                        "mcQueenWear.jpeg"
                      })`,
                      backgroundPosition: `center`,
                    }}
                  ></div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="w-full h-[20rem] xMiniTablet:absolute xMiniTablet:bottom-[2rem] xMiniTablet:w-[70%] xMiniTablet:h-[15rem] xMiniTablet:-right-8 lg:bottom-[-2rem] lg:right-[-6rem] 2xl:right-[-8rem]">
            <Swiper
              modules={[Controller, Autoplay]}
              slidesPerView={1}
              className="h-full"
              spaceBetween={10}
              autoplay={true}
              loop={true}
              onSwiper={setThirdSwiper}
              aria-disabled={true}
            >
              {designerTalksData.map((designerTalk) => {
                const { talk, name, role } = designerTalk;

                return (
                  <SwiperSlide className="w-full h-full" key={talk}>
                    <DesignerTalk talk={talk} name={name} role={role} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Fade>
      <img
        src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "TestimonialsDecor.svg"}
        alt=""
        className="max-w-none h-[15rem] scale-[1.4] relative hover:scale-[1.6] transition duration-300 xMiniTablet:col-start-2 xMiniTablet:scale-[1] xMiniTablet:hover:scale-[1.2] md:scale-[1.4] md:hover:scale-[1.6] mini2xl:scale-[1.8]"
      />
    </div>
  );
};

export default Testimonials;
