import { AiFillLock } from "react-icons/ai";
import FOutlinedInput from "../../components/FormComponents/FOutlinedInput";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { useRef } from "react";

const Login = () => {
  const homeLinkRef = useRef<HTMLAnchorElement>(null);
  return (
    <div className="w-full h-fit grid gap-4 bg-white md:grid-cols-2 miniLarge:gap-8 miniLarge:pr-8 2xl:gap-20 2xl:pr-[10rem] pb-8">
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[#DAE7F7] lssm:gap-[5rem] lssm:py-[5rem] relative">
        <div className="w-full absolute h-[7rem] bg-[#DAE7F7] -top-[6rem] left-0 flex items-center justify-start z-[50] pl-4 ">
          <img
            src="/server-assets/Logo.svg"
            alt="logo"
            className="w-[2rem] lg:w-[3rem] transition-all"
            onClick={() => homeLinkRef.current?.click()}
          />
          <Link to={"/"}></Link>
        </div>
        <div className="w-full h-full grid place-items-center relative ">
          
          <img
            src="/server-assets/backDecor.svg"
            alt=""
            className="rotate-[40deg] miniLarge:scale-[1.3] relative top-[0rem] -left-20"
          />
          <img
            src="/server-assets/authBg6.png"
            alt=""
            className="absolute w-[57%] h-[22rem] rounded-lg xlarge:h-[25rem]"
          />
          <img
            src="/server-assets/authBg5.png"
            alt=""
            className="absolute w-[45%] h-[15rem] rounded-lg right-11 -bottom-[5rem] xlarge:h-[18rem]"
          />
          <img
            src="/server-assets/authBg4.png"
            alt=""
            className="absolute w-[30%] h-[7rem] rounded-lg left-11 -bottom-[2rem] xlarge:h-[8rem]"
          />
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-3">
          <span className="text-lg text-[#315BFF] font-bold md:text-2xl">
            Check out new sneakers and get discounts.
          </span>
          <span className="text-xs text-gray-500 text-center font-bold px-[5rem] xl:px-[10rem] lgMd:text-base ">
            Stop wasting time going on the market looking for what you don't
            know. Here is the solution!!
          </span>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col items-center justify-center gap-4 px-4 pb-24 mt-24 lsm:px-8 miniLarge:gap-8 2xl:w-[80%] ">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="text-2xl font-bold text-center text-[#0A083A] lsm:text-3xl md:text-2xl">
            Sign in to kicks
          </h1>
          <p className="text-base">
            Not a member?
            <Link to={'/auth/register'} className="text-[#315BFF] underline">Join Us</Link>
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <FOutlinedInput label="Enter Email" children={<MdAlternateEmail />} _onChange={undefined} name="email" />

          <FOutlinedInput label="Password" children={<AiFillLock />} _onChange={undefined} name="password" />
          <Link to={`/recovery`} className="self-end text-sm text-gray-600">
            Recovery password
          </Link>
        </div>
        <button className="button bg-[#315BFF] hover:border-[#315BFF] hover:text-[#315BFF] hover:buttonOutline font-black ">
          Sign In
        </button>
        <h1 className="w-full flex flex-col items-center relative">
          <hr className="w-full border border-gray-400" />
          <span className="text-gray-500 absolute bg-white px-8 -translate-y-3">
            Or continue with
          </span>
        </h1>
        <div className="w-full h-fit flex items-center justify-center gap-12">
          <div className="loginOption">
            <FcGoogle size={30} />
          </div>
          <div className="loginOption">
            <BsApple size={30} />
          </div>
          <div className="loginOption">
            <FaFacebook color="blue" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
