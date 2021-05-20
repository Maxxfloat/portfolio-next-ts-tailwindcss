import { useState } from "react";
import { animated } from "react-spring";
import s from "./DescriptionField.module.scss";

interface cardContentType {
  front?: JSX.Element;
  back?: JSX.Element;
  className: string;
  style: object;
}

const DescriptionField: React.FC<cardContentType> = ({ className, style }) => {
  const [flip, setFlip] = useState(false);

  const side = (style: string, content: string) => {
    // const sideBtns = [
    //   {
    //     title: "مهارت ها",
    //     clickFnc: () => setFlip(true),
    //   },
    //   {
    //     title: "مشخصات",
    //     clickFnc: () => setFlip(false),
    //   },
    // ];

    return (
      <div
        className={`${style} bg-gray-100 rounded-t-3xl bg-opacity-100 absolute w-full h-full p-5 box-border`}
        style={{ boxShadow: "0 4px -1px -1px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="h-3/4 block">{content}</div>
        <div className="flex justify-around space-x-2 items-center p-3 box-border h-1/4">
          {/* {sideBtns.map((btn, index) => (
            <button
              key={index}
              className={`px-2 h-14 w-full border-2 bg-red-400 border-red-800 rounded-md`}
              onClick={btn.clickFnc}
            >
              {btn.title}
            </button>
          ))} */}
        </div>
      </div>
    );
  };

  const sideBtns = [
    {
      title: "مهارت ها",
      bg: flip ? "bg-red-800 text-white" : "bg-transparent",
      btnStyle: "border-l-0 rounded-r-sm",
      clickFnc: () => setFlip(true),
    },
    {
      title: "مشخصات",
      bg: !flip ? "bg-red-800 text-white" : "bg-transparent",
      btnStyle: "border-r-0 rounded-l-sm",
      clickFnc: () => setFlip(false),
    },
  ];

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
            box-border relative w-full h-4/5 `}
        >
          {side(s.front, "front")}
          {side(s.back, "back")}
        </div>
        <div className="flex justify-around space-x-1 items-center box-border rounded-b-3xl w-full h-auto bg-gray-100 bg-opacity-100 overflow-hidden shadow-md">
          {sideBtns.map((btn, index) => (
            <button
              key={index}
              className={`${btn.bg} ${btn.btnStyle} px-2 h-14 w-full border-2 border-b-0 border-red-900 active:bg-red-200 `}
              onClick={btn.clickFnc}
              style={{ outline: "none" }}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </animated.div>
    </>
  );
};

export default DescriptionField;
