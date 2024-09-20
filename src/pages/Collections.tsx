import { FiChevronLeft } from "react-icons/fi";
import { Autoplay, Controller, Pagination as SwiperPagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Collection from "../components/Products/Collection";
import SlideNextButton from "../components/Global/SlideNextButton";
import { categoryProData, collections } from "../data";
import { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import CategoryProduct from "../components/Products/CategoryProduct";
import Subscriptions from "../components/Landing/Subscriptions";
import { IoIosRemove, IoMdAdd, IoMdCheckmark } from "react-icons/io";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Collections = () => {
  const nextButtonRef = useRef<HTMLDivElement | null>(null);

  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState([
    { label: "Newest", value: "newest", open: false },
    { label: "Most popular", value: "mostPopular", open: false },
    { label: "Lowest price", value: "lowestPrice", open: false },
    { label: "Highest price", value: "highestPrice", open: false },
  ]);

  const [otherFilters, setOtherFilters] = useState<any[]>([
    {
      label: "Category",
      value: "category",
      choices: [
        { choice: "performance", checked: false },
        { choice: "streetwear", checked: false },
      ],
      open: false,
      panel: "panel1",
    },
    {
      label: "Gender",
      value: "gender",
      choices: [
        { choice: "Female", checked: false },
        { choice: "Male", checked: false },
      ],
      open: false,
      panel: "panel2",
    },
    {
      label: "Size",
      value: "size",
      choices: [
        { choice: 8.5, checked: false },
        { choice: 7, checked: false },
        { choice: 6, checked: false },
        { choice: 8, checked: false },
      ],
      open: false,
      panel: "panel3",
    },
    {
      label: "Color",
      value: "color",
      choices: [
        { choice: "mixed", checked: false },
        { choice: "white", checked: false },
        { choice: "yellow", checked: false },
        { choice: "black", checked: false },
      ],
      open: false,
      panel: "panel4",
    },
    {
      label: "Material",
      value: "material",
      choices: [
        { choice: "cotton", checked: false },
        { choice: "wool", checked: false },
        { choice: "silk", checked: false },
      ],
      open: false,
      panel: "panel5",
    },
  ]);

  const handleChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
  };

  const [mobile, setIsMobile] = useState(window.innerWidth < 430);
  const [lsm, setLsm] = useState(window.innerWidth <= 500);
  const [md, setMd] = useState(window.innerWidth >= 768);
  const [xl2, set2xl] = useState(window.innerWidth >= 1536);

  const [baseValue, setBaseValue] = useState(mobile ? 1 : md ? 6 : 2);

  const resizeDetect = () => {
    setIsMobile(window.innerWidth < 430);
    setBaseValue(mobile ? 1 : md ? 6 : 2);
    setLsm(window.innerWidth <= 500);
    setMd(window.innerWidth >= 768);
    set2xl(window.innerWidth >= 1536);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeDetect);
    return () => window.removeEventListener("resize", resizeDetect);
  }, [mobile, baseValue, lsm, md]);

  const [page, setPage] = useState(1);
  const [indexes, setIndexes] = useState<{
    firstIndex: number;
    secondIndex: number;
  }>({
    firstIndex: page == 1 ? 0 : page * baseValue - baseValue,
    secondIndex: page == 1 ? baseValue : page * baseValue,
  });

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setIndexes(() => ({
      firstIndex: page == 1 ? 0 : page * baseValue - baseValue,
      secondIndex: page == 1 ? baseValue : page * baseValue,
    }));
  }, [page, baseValue]);

  const handleFiltersMdopen = (value: string) => {
    setFilters((prevFilters) => {
      return prevFilters.map((filter) => {
        return filter.value == value
          ? { ...filter, open: !filter.open }
          : filter;
      });
    });
  };

  const [personName, setPersonName] = useState<any[]>([]);

  const handleChangeMultiSelect = (
    event: SelectChangeEvent<typeof personName>
  ) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" || typeof value === "number"
        ? value.split(",")
        : value
    );
  };

  const handleChecked = (choiceName: string | number) => {
    setOtherFilters((prevFilters) => {
      return prevFilters.map((filter) => {
        const choices = filter.choices.map((choice: any) => {
          return choice.choice == choiceName
            ? { ...choice, checked: !choice.checked }
            : choice;
        });
        console.log({ ...filter, choices: choices });
        return { ...filter, choices: choices };
      });
    });
  };

  const [expanded, setExpanded] = useState<string | false>(false);
  const handleExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="w-full h-fit py-16 flex flex-col items-center justify-center gap-4 bg-white">
      <div className="w-full h-full hidden pt-[1rem] md:flex justify-start items-center pl-[1rem] gap-4 bg-white lsm:px-8 xl:px-20 2xl:px-24">
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Home
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Collections
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-medium text-slate-500 2xl:text-lg">
          Running Sneakers
        </span>
      </div>
      <span className="w-full h-fit py-2 flex items-center justify-start gap-2 text-sm text-[rgb(10,8,58)] pl-4 font-bold lssm:text-lg md:hidden ">
        <FiChevronLeft />
        Running sneakers
      </span>
      <div className="w-full h-fit pt-[5rem] pb-[2rem] flex flex-col bg-[#f5f5f5] items-center justify-center gap-4 md:grid md:grid-cols-[40%_60%] md:place-items-start lg:pl-[1rem] xl:pl-[3.5rem] 2xl:pl-[5rem]">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-6 md:items-start md:px-8">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-4xl">
            Running Sneakers
          </span>
          <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider px-8 lsm:text-start md:px-0 2xl:text-base ">
            For parties, the sneakers are good depending on your favourite, you
            can find the one that fits you.
          </p>
          <button
            className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
            style={{
              boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
            }}
          >
            Shop now
          </button>
        </div>
        <div className={`collectionsSwiper w-full h-[20rem] px-[1rem]`}>
          <Swiper
            modules={[Controller, Autoplay, SwiperPagination]}
            className="w-full h-full"
            slidesPerView={lsm ? 1 : xl2 ? 3 : 2}
            spaceBetween={20}
            autoplay={true}
            loop={true}
            pagination
          >
            {collections.map((data) => {
              const { id, imgSrc, categoryName, productsNbr } = data;
              return (
                <SwiperSlide key={id} className="h-full">
                  <Collection
                    id={id}
                    imgSrc={imgSrc}
                    categoryName={categoryName}
                    productsNbr={productsNbr}
                  />
                  <SlideNextButton swipingButtonRefNext={nextButtonRef} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-white py-8 lg:w-[95%] xl:w-[90%] 2xl:prz-[5rem]">
        <div className="w-full h-fit flex justify-between items-center px-4">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-3xl">
            Performance Sneakers
          </span>
          <FormControl className="w-[50%] md:w-[30%]">
            <InputLabel>filter by</InputLabel>
            <Select value={filter} label="Filter" onChange={handleChange}>
              {filters.map((filter, index) => {
                const { label, value } = filter;
                return (
                  <MenuItem value={value} key={index}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="w-full h-full flex gap-4 md:grid md:grid-cols-[30%_70%] max2xl:grid-cols-[25%_75%] max2xl:gap-[5rem]">
          <div className="w-full h-fit hidden md:flex flex-col gap-4 pl-[1rem]">
            <div className="w-[80%] h-full bg-white border rounded-md shadow-md md:w-full">
              {filters.slice(0, 4).map((filter, index) => {
                const { value, label, open } = filter;
                return (
                  <Accordion
                    style={{
                      cursor: `none`,
                      boxShadow: `none`,
                      background: `#ffffff`,
                    }}
                    key={index}
                    onChange={() => handleFiltersMdopen(value)}
                  >
                    <AccordionSummary
                      expandIcon={
                        open ? (
                          <IoIosRemove className={`text-gray-600 text-xl`} />
                        ) : (
                          <IoMdAdd className={`text-gray-600 text-xl`} />
                        )
                      }
                      className="hover:bg-[#f5f5f5] border-0"
                    >
                      <span
                        className={`w-full text-base font-bold hover:text-[#0A083A] ${
                          open ? "text-[#0A083A]" : "text-gray-600"
                        }  transition-all duration-700 flex justify-between items-center`}
                      >
                        {label}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <span className="w-full h-full text-base font-semibold text-[#315BFF] flex justify-between">
                        {label}
                        <IoMdCheckmark className={`text-xl text-[#315BFF]`} />
                      </span>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <FormControl className="w-[80%] h-full shadow-md md:w-full">
              <InputLabel id="demo-multiple-checkbox-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChangeMultiSelect}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {otherFilters.slice(0, 1).map((filter) => {
                  const { label, value, choices } = filter;
                  return choices?.map((choice: any) => {
                    const { choice: name, checked } = choice;
                    return (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    );
                  });
                })}
              </Select>
            </FormControl>
            <div className="w-[80%] h-full bg-white border rounded-md shadow-md md:w-full">
              {otherFilters.slice(1).map((filter, index) => {
                const { value, label, open, choices, panel } = filter;
                return (
                  <Accordion
                    style={{
                      boxShadow: `none`,
                      background: `#ffffff`,
                    }}
                    onChange={handleExpanded(panel)}
                    expanded={expanded === panel}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={
                        open ? (
                          <IoIosRemove className={`text-gray-600 text-xl`} />
                        ) : (
                          <IoMdAdd className={`text-gray-600 text-xl`} />
                        )
                      }
                      className="hover:bg-[#f5f5f5] border-0"
                    >
                      <span
                        className={`w-full text-base font-bold hover:text-[#0A083A] ${
                          open ? "text-[#0A083A]" : "text-gray-600"
                        }  transition-all duration-700 flex justify-between items-center`}
                      >
                        {label}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails className="w-full h-full flex flex-col items-start justify-center gap-2">
                      <FormGroup>
                        {choices.map((choice: any, index: number) => {
                          const { checked, choice: name } = choice;
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={() => handleChecked(name)}
                                />
                              }
                              label={name}
                              key={index}
                            />
                          );
                        })}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-8 md:justify-start">
            <div
              className={`w-full h-fit flex gap-2 px-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 max2xl:w-[90%]`}
            >
              {categoryProData
                .slice(indexes.firstIndex, indexes.secondIndex)
                .map((prodData) => {
                  const {
                    id,
                    imgSrc,
                    price,
                    discount,
                    sneakersName,
                    sneakersType,
                  } = prodData;

                  return (
                    <CategoryProduct
                      key={id}
                      id={id}
                      imgSrc={imgSrc}
                      price={price}
                      discount={discount}
                      sneakersName={sneakersName}
                      sneakersType={sneakersType}
                    />
                  );
                })}
            </div>
            <Pagination
              count={
                mobile
                  ? categoryProData.length
                  : md
                  ? Math.floor(categoryProData.length / 3)
                  : categoryProData.length / 2
              }
              siblingCount={0}
              defaultPage={1}
              page={page}
              onChange={handlePageChange}
              color="primary"
              className="z-50"
            />
          </div>
        </div>
      </div>
      <Subscriptions page="collections" />
    </div>
  );
};

export default memo(Collections);
