import { useSwiper } from "swiper/react";
import { memo, type FC } from "react";

const SlideNextButton: FC<NextButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="hidden"
      onClick={() => swiper.slideNext()}
      ref={props.swipingButtonRefNext}
    ></button>
  );
};

export default memo(SlideNextButton);
