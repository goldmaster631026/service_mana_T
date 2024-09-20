import { AiFillLock } from "react-icons/ai";
import FOutlinedInput from "../../components/FormComponents/FOutlinedInput";
import { BiUserCheck } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import VisitorAPI from "visitorapi";
import Calendar from "../../components/Auth/Calendar";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

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

const fetchCountries = async () => {
  return new Promise((resolve, reject) => {
    resolve(
      fetch("https://restcountries.com/v3.1/all").then((data) => data.json())
    );
    reject(() => console.log("failed to fetch..."));
  });
};

const SignUp = () => {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any>([]);
  const [sendSUpdates, setSendSUpdates] = useState(false);

  useEffect(() => {
    fetchCountries().then((res) => setCountries(res));
    VisitorAPI("OH1CA2yn2CodfSiBnRIo", (data: any) => {
      setCountry(data.countryName);
    });
  }, []);

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof country>) => {
      const {
        target: { value },
      } = event;
      setCountry(value);
    },
    [country]
  );

  const handleSendSUpdates = () => setSendSUpdates((prev) => !prev);

  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    dob: ''
  })

  const handleInputChange = (e: ChangeEvent) => {
    const input = (e.target as HTMLInputElement);
    setFormValues(prevFormValues => {
      console.log({...prevFormValues, [input.name]: input.value})
      return {
        ...prevFormValues, [input.name]: input.value
      }
    })
  }

  return (
    <div className="w-full h-fit grid gap-4 bg-white md:grid-cols-2 miniLarge:gap-8 miniLarge:pl-8 2xl:gap-24 2xl:pl-20">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4 px-4 lsm:px-8 miniLarge:gap-8 miniLarge:w-[80%]">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold text-center text-[#0A083A] lsm:text-3xl md:text-2xl">
            create your Kicks account
          </h1>
          <p className="text-base">
            Already have an account?{" "}
            <Link to={'/auth/login'} className="text-[#315BFF] underline">Login</Link>
          </p>
        </div>
        <form noValidate className="w-full flex flex-col gap-4">
          <FOutlinedInput
            label="Full name"
            children={<BiUserCheck />}
            _onChange={handleInputChange}
            name='fullName'
          />
          <FOutlinedInput
            label="Email"
            children={<MdAlternateEmail />}
            _onChange={handleInputChange}
            name='email'
            type="email"
          />
          <FOutlinedInput
            label="Password"
            children={<AiFillLock />}
            _onChange={handleInputChange}
            name='password'
            type="password"
          />
          <div className="w-full flex flex-col gap-2">
            <Calendar label="Date of birth" />
            <span className="text-gray-400 text-sm">
              Get a yearly discount on your Birthday.
            </span>
          </div>
          <div className="w-full tableLr:col-span-2">
            <Select
              value={country}
              onChange={handleChange}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              className="w-full"
            >
              <MenuItem disabled>Country</MenuItem>
              {countries?.map((cname: any) => (
                <MenuItem
                  key={cname.name.common}
                  value={cname.name.common}
                  className="w-full flex justify-center items-center gap-4"
                >
                  <span className="w-fit text-white">{cname.flag}</span>
                  <span className="w-fit text-black">{cname.name.common}</span>
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="w-full h-fit flex gap-2">
            <FOutlinedInput label="Male" _onChange={undefined} />
            <FOutlinedInput label="Female" _onChange={undefined} />
          </div>
        </form>
        <FormControlLabel
          label="Sign up for emails to get updates from Shop, on products, benefits and offers."
          className="w-full"
          control={
            <Checkbox
              checked={sendSUpdates}
              color="primary"
              size="small"
              onChange={handleSendSUpdates}
            />
          }
        />
        <span className="text-sm">
          By creating an account, you agree to kick's{" "}
          <b className="text-[#0A083A]">Privay policy</b> and{" "}
          <b className="text-[#0A083A]">Terms of Use</b>
        </span>
        <button className="button bg-[#315BFF] hover:border-[#315BFF] hover:text-[#315BFF] hover:buttonOutline">
          Join Us
        </button>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[#DAE7F7] relative">
        <div className="w-full absolute h-[7rem] bg-[#DAE7F7] -top-[6rem] left-0 flex items-center justify-end pr-[8rem] gap-[2rem] z-[50] pl-4">
          <NavLink to="/products/search">
            <FiSearch
              className={`w-[1.3rem] xs:w-[1rem] lg:w-[2rem] miniTablet:w-[3rem] miniTablet:h-[1.5rem] lg:h-[1.5rem] h-[1.3rem] sm:w-[1rem] block md:hidden lg:block font-black text-${
                location.pathname == "/about" ||
                location.pathname == "/products/promoProducts"
                  ? "white"
                  : "black"
              }`}
            />
          </NavLink>
          <NavLink to="/profile">
            <FiUser
              className={`w-[1.5rem] h-[1.5rem] hidden lg:block text-${
                location.pathname == "/about" ||
                location.pathname == "/products/promoProducts"
                  ? "white"
                  : "to-black"
              }`}
            />
          </NavLink>

          <NavLink
            to="/cart"
            className="w-fit h-fit relative md:hidden lg:block"
          >
            <FiShoppingBag
              className={`w-[1.5rem] xs:w-[1rem] sm:w-[1rem] miniTablet:w-[1.75rem] lg:w-[2rem] h-[1.5rem] font-bold ${
                location.pathname == "/about" ||
                location.pathname == "/products/promoProducts"
                  ? "text-white"
                  : "black"
              }`}
            />
            <span className="absolute bg-[#FF3C78] w-[1.2rem] xs:w-[1rem] xs:h-[1rem] xs:text-xs xs:font-semibold sm:w-[.9rem] sm:h-[.9rem] lg:w-[1rem] lg:h-[1rem] h-[1.2rem] sm:text-xs rounded-full grid place-content-center text-white right-[-.5rem] miniTablet:right-[-.3rem]  lg:right-[-.3rem] top-[.75rem]">
              3
            </span>
          </NavLink>
        </div>
        <div className="w-full h-fit grid place-items-center relative">
          <img
            src="/server-assets/backDecor.svg"
            alt=""
            className="rotate-[110deg] miniLarge:w-[60%]"
          />
          <img
            src="/server-assets/authBg.png"
            alt=""
            className="absolute w-[20rem] h-[15rem] miniLarge:w-[70%] miniLarge:h-[70%] animate-pulse"
          />
          <img
            src="/server-assets/authBg1.png"
            alt=""
            className="absolute w-[8rem] h-[10rem] left-4 bottom-[2rem] miniLarge:scale-[1.3] miniLarge:left-10"
          />
          <img
            src="/server-assets/authBg7.png"
            alt=""
            className="absolute w-[7rem] h-[10rem] right-9 bottom-[2rem] rotate-[25deg] miniLarge:scale-[1.3] miniLarge:right-16"
          />
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-3">
          <span className="text-lg text-[#315BFF] font-bold">
            Best Sneakers store brought to you.
          </span>
          <span className="text-xs text-gray-500 text-center font-bold px-6 ">
            Stop wasting time going on the market looking for what you don't
            know. Here is the solution!!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
