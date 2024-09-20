import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import type { FC } from "react";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { Fade } from "react-reveal";

const FacAccordion: FC<AccordionProps1> = (props) => {
  const { question, answer, handleChange, panel, expanded, page } = props;

  return (
    <Fade bottom>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 transition-all duration-1000 miniTablet:w-full">
        <Accordion
          expanded={expanded}
          onChange={handleChange(panel)}
          style={{
            boxShadow: `none`,
            background: `${page == "product" ? "white" : "#f5f5f5"}`,
            borderRadius: 0,
          }}
          className={`w-full pb-1 shadow-none border-b border-gray-300 rounded-none miniTablet:pb-[2rem] miniTablet:pt-[2rem] ${
            page == "product" && "pb-[1.2rem] pt-[1.2rem]"
          } ${panel == "panel1" && "border-t"}`}
        >
          <AccordionSummary
            expandIcon={
              expanded ? (
                <IoIosRemove className={`text-gray-600 text-xl`} />
              ) : (
                <IoMdAdd className={`text-gray-600 text-xl`} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="w-full text-lg font-bold text-[#0A083A]  transition-all duration-700 flex justify-between items-center lg:text-xl">
              {question}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-xs font-semibold lg:text-sm mini2xl:text-base md:pr-[65%] text-gray-600">
              {answer}
            </span>
          </AccordionDetails>
        </Accordion>
      </div>
    </Fade>
  );
};

export default FacAccordion;
