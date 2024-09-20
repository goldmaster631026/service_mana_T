import { useCallback, useState } from "react";
import FacAccordion from "./FacAccordion";
import Triangle from "../About/Triangle";
import { Bounce, Zoom } from "react-reveal";

const Faqs = () => {
  const [accordionData, setAccordionData] = useState([
    {
      question: "can we change the shipping address?",
      answer:
        "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
      panel: "panel1",
    },
    {
      question: "Are the discounts available",
      answer:
        "Yeah, the discounts are available as well as the promo codes, but not on all the products",
      panel: "panel2",
    },
    {
      question: "Can we access our basket",
      answer:
        "Yeah, that is very simple after you have added the product or you didn't that's also possible, click on the basket icon in the right corner and you're good to go",
      panel: "panel3",
    },
  ]);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    }, [expanded])
  return (
    <div className="w-full h-fit py-16 flex flex-col gap-[2rem] items-center relative">
      <div className="w-full h-fit flex flex-col items-start justify-center gap-4 pl-6 miniSm:pl-8 xMiniTablet:pl-12 md:items-center">
        <Zoom>
          <span className="text-start text-[#FF3C78] text-sm uppercase font-bold md:text-center md:text-base">
            faq
          </span>
          <span className="text-start text-[#0A083A] text-3xl font-bold xMiniTablet:text-4xl md:text-center">
            Customers ask, we answer
          </span>
        </Zoom>
        <Bounce top>
          <span className="text-start text-xs text-gray-600 font-semibold pr-14  lssm:text-sm md:text-center md:pr-0">
            Don't worry if you have questions, we are here to help you solve
            them
          </span>
        </Bounce>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-center pl-2 md:items-center ">
        {accordionData.map((data, index) => {
          return (
            <FacAccordion
              expanded={expanded === data.panel}
              handleChange={handleChange}
              question={data.question}
              panel={data.panel}
              answer={data.answer}
              key={index}
            />
          );
        })}
      </div>
      <div className="w-fit h-fit rotate-[220deg] -z-0 grid grid-cols-2 lg:absolute lg:left-0 lg:bottom-0 ">
        <Triangle position={{ floatOr: "relative" }} id={1} rotation="100deg" />
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
  );
};

export default Faqs;
