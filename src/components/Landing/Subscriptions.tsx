import { useCallback, useState, type FC, type ChangeEvent, type FormEvent, memo } from "react";
import Socials from "../Global/Socials";
import { Flip, Zoom, Bounce } from "react-reveal";
import { useResponsive } from "../../hooks/useResponsive";

const Subscriptions: FC<PageProps> = (props) => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [
    tablet,
    miniLaptop,
    laptop,
    mobile,
    smallMobile,
    catMiniLaptop,
    desktop,
    newArrMobile,
    largeTablet,
  ] = useResponsive();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);

      const regEX = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}.[A-Z]/gim;
      const emailValidation = regEX.test(email);
      setEmailValid(emailValidation);
    },
    [email, emailValid]
  );

  const handleSubscription = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const regEX = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}.[A-Z]/gim;
      const emailValidation = regEX.exec(email);
      console.log({ email });
    },
    []
  );

  return (
    <div
      className={`w-full h-screen flex flex-col rounded-tr-2xl rounded-br-2xl md:flex-row md:h-[50vh] md:w-screen gMd:w-[90%] ${
        props.page === "collections" && "gMd:w-full"
      }`}
      style={{
        background:
          "linear-gradient(97.49deg, #8AA8F8 -0.43%, #315BFF 144.53%)",
      }}
    >
      {mobile ? (
        <Flip duration={1000}>
          <div
            className="h-[5rem] w-[5rem] rounded-full"
            style={{
              background: "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)",
            }}
          ></div>
        </Flip>
      ) : null}
      <div className="flex flex-col items-center justify-center w-full h-[60%] gap-8 md:h-full md:w-[50%]">
        <Bounce duration={1500}>
          <span className="text-3xl font-bold text-white tracking-wide text-center px-[1rem] md:px-0 md:ml-[2rem] md:text-start lssm:px-[5rem] gMd:p-0">
            Subscribe now to get the latest updates
          </span>
        </Bounce>
        <Bounce delay={100} duration={1400}>
          <form
            className="w-[90%] h-[8rem] flex flex-col place-items-center rounded-xl relative overflow-hidden"
            onSubmit={handleSubscription}
          >
            <input
              type="text"
              placeholder="Enter your email"
              onChange={handleChange}
              name="email"
              value={email}
              className="w-full text-[#6C6B6B] text-base text-center h-1/2 bg-white  outline-none"
              autoCorrect="true"
              autoComplete="false"
            />
            <span className="bg-[#ff4444d0] text-white text-sm px-2 rounded-md absolute top-[-2re] left-[1rem]">
              {emailValid || email == "" ? "" : "Please input valid email"}
            </span>
            <button
              className={`w-full text-white h-1/2 bg-[#315BFF] text-lg font-semibold uppercase`}
            >
              Subscribe
            </button>
          </form>
        </Bounce>
        {!mobile && <Socials section="subscriptions" />}
      </div>{" "}
      <div className="w-full h-[40%] grid items-end justify-items-center relative pb-11 md:h-full gMd:h-full md:flex md:flex-col md:items-center md:justify-between md:pb-0 md:w-[50%]">
        {mobile && <Socials section="subscriptions" />}
        <div>
          <Flip>
            <div
              className="h-[10rem] w-[10rem] rounded-full md:h-[10rem] md:w-[10rem] md:absolute md:bottom-[2rem] md:left-[6rem] lg:w-[15rem] lg:h-[15rem]"
              style={{
                background:
                  "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)",
              }}
            ></div>
          </Flip>
          <Zoom>
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"subscription.png"}
              alt=""
              className="absolute left-[-2.5rem] bottom-[2rem] miniTablet:left-[4rem] md:left-[-2.5rem] md:bottom-0"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default memo(Subscriptions);
