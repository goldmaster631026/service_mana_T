import { FC, useMemo } from "react";
import { colors } from "../../data";
import { Bounce } from "react-reveal";

const Triangle: FC<TriangleProps> = (props) => {
  const { position, id, rotation, delay } = props;

  const styles = useMemo(() => {
    return {
      background: `linear-gradient(270deg, ${colors[id].firstColor} 0%, ${colors[id].secondColor} 100%)`,
      transform: `rotateZ(${rotation}deg)`,
      left: `${position.left}`,
      right: `${position.right}rem`,
      bottom: `${position.bottom}rem`,
      top: `${position.top}rem`,
    };
  }, [id, position]);

  return (
    <Bounce duration={1000} delay={delay} right>
      <div
        className={`w-[1.5rem] h-[1.5rem] absolute rounded-br-full z-0 ${position.floatOr}`}
        style={{
          ...styles,
        }}
      ></div>
    </Bounce>
  );
};

export default Triangle;
