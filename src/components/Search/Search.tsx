import { memo, type FC } from "react";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";
import { useDisclosure } from "@mantine/hooks";

const Search: FC<{ pathname: string }> = ({ pathname }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-fit h-fit flex items-center justify-center">
      <FiSearch
        className={`w-[1.3rem] xs:w-[1rem] lg:w-[2rem] miniTablet:w-[3rem] miniTablet:h-[1.5rem] lg:h-[1.5rem] h-[1.3rem] sm:w-[1rem] block md:hidden lg:block font-black text-${
          pathname == "/about" || pathname == "/products/promoProducts"
            ? "white"
            : "black"
        }`}
        onClick={open}
      />
      <SearchModal opened={opened} close={close} />
    </div>
  );
};

export default memo(Search);
