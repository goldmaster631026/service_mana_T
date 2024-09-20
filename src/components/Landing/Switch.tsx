import { useState } from "react";

const Switch = () => {
  const [menOn, setMenOn] = useState(true);

  return (
    <div
      className="w-[4rem] h-[2rem] rounded-full relative flex items-center transition-all duration-1000"
      style={{
        background:
          "linear-gradient(97.49deg, #8AA8F8 -0.43%, #315BFF 144.53%)",
      }}
      onClick={() => setMenOn((prev) => !prev)}
    >
      <div
        className={`w-[1.5rem] h-[1.5rem] rounded-full bg-white absolute ${
          menOn ? "left-[2.3rem]" : "left-1"
        } transition-all duration-200`}
      ></div>
    </div>
  );
};

export default Switch;
