import { useSwiper } from "swiper/react";
import { memo, type FC } from "react";

const SlidePrevButton: FC<PrevButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      ref={props.swipingButtonRefPrev}
    ></button>
  );
};

export default memo(SlidePrevButton);
