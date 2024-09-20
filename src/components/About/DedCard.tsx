import { FC, useMemo } from "react";

const DedCard: FC<DedCardProps> = (props) => {
  const { id, heading, description } = props;

  const borderColors: string[] = useMemo(() => {
    return ["#315BFF", "#FE7831", "#02BE83"];
  }, []);

  return (
    <div
      className={`w-full h-full bg-white rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-[2rem] lg:gap-4`}
      style={{ borderColor: `${borderColors[id]}` }}
    >
      <span
        className={`text-xl py-2 px-3 rounded-full text-white font-black lg:text-lg lg:py-1 lg:px-2`}
        style={{ background: `${borderColors[id]}` }}
      >
        0{id + 1}
      </span>
      <span
        className={`text-2xl font-bold lg:text-xl`}
        style={{ color: borderColors[id] }}
      >
        {heading}
      </span>
      <p className="text-lg tracking-wide text-gray-800 font-medium text-center px-6 lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default DedCard;
