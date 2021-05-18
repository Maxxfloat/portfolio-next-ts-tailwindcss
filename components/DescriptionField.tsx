import { useState } from "react";
import { animated } from "react-spring";
import s from "./DescriptionField.module.scss";

interface cardContentType {
  front?: JSX.Element;
  back?: JSX.Element;
  className: string;
  style: object;
}

const DescriptionField: React.FC<cardContentType> = ({
  front,
  back,
  className,
  style,
}) => {
  const [cardContent, setCardContent] = useState("bio");
  const [flip, setFlip] = useState(false);

  const side = (style, content: string) => (
    <div className={`${style} absolute w-full h-full p-5 box-border`}>
      <div className="h-2/3 block">{content}</div>
      <div className="flex space-x-3 p-3 box-border justify-center h-1/3">
        <button onClick={() => setFlip(true)} className="border-black border-2">
          مهارت ها
        </button>
        <button onClick={() => setFlip(false)}>مشخصات من</button>
      </div>
    </div>
  );
  return (
    <>
      <animated.div
        className={`${className} ${s.card} bg-transparent`}
        style={style}
      >
        <div
          className={`
            ${s.inner} 
            ${flip ? s.flip : ""}
            bg-gray-100 box-border shadow-md rounded-3xl relative w-full h-full `}
        >
          {side(s.back, "back")}
          {side(s.front, "front")}
        </div>
      </animated.div>
    </>
  );
};

export default DescriptionField;
