import { useState } from "react";
import { animated } from "react-spring";
import s from "./DescriptionField.module.scss";

interface cardContentType {
  className: string;
  style: object;
}

const DescriptionField: React.FC<cardContentType> = ({ className, style }) => {
  const [flip, setFlip] = useState(false);

  const side = (style: string, header: string, paragraphs: string[]) => {
    return (
      <div
        className={`${style} bg-gray-100 rounded-t-3xl bg-opacity-100 absolute w-full h-full p-5 box-border`}
      >
        <div className="h-3/4 block">
          <div dir="rtl" className="space-y-2 px-3 box-border">
            <h3 className="font-bold text-2xl">{header}</h3>
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-justify"
                dir={text.includes("React") ? "ltr" : ""}
              >
                {text}
              </p>
            ))}
            {/* <p className="text-justify">
              ساکن شهر دزفول استان خوزستان ۲۳ سال دارم و به مدت دوسال است که
              مشغول به توسعه وب سایت هستم
            </p>
            <p className="text-justify">
              دلیل ورود من به این حوضه به مرحله عمل رسوندن ایده های خودم بود و
              الان انگیزه اصلی من به انجام رسوندن پروژه های بزرگ و کاربردی
              می‌باشد تا بتواند نیاز ها در عرصه وب را برطرف کنم
            </p>
            <p className="text-justify">
              در حال حاضر اشتیاق زیادی برای کسب تجربه و کار با یک تیم متخصص را
              دارم
            </p> */}
          </div>
        </div>
      </div>
    );
  };

  const sideBtns = [
    {
      title: "مهارت ها",
      bg: flip ? "bg-red-800 text-white" : "bg-transparent",
      btnStyle: "border-l-0",
      clickFnc: () => setFlip(true),
    },
    {
      title: "مشخصات",
      bg: !flip ? "bg-red-800 text-white" : "bg-transparent",
      btnStyle: "border-r-0",
      clickFnc: () => setFlip(false),
    },
  ];

  // --- side content ---
  const aboutMeSide = [
    "ساکن شهر دزفول استان خوزستان ۲۳ سال دارم و به مدت دوسال است که مشغول به توسعه وب سایت هستم.",
    "دلیل ورود من به این حوضه به مرحله عمل رسوندن ایده های خودم بود و الان انگیزه اصلی من به انجام رسوندن پروژه های بزرگ و کاربردی می‌باشد تا بتوانم نیاز ها در عرصه وب را برطرف کنم.",
    "در حال حاضر اشتیاق زیادی برای کسب تجربه و کار با یک تیم متخصص را دارم.",
  ];
  const techSide = [
    "تا به این لحظه تکنولوژی ها و پکیج هایی که از آن ها استفاده کرده‌ام شامل:",
    "React, Redux, NextJS, TypeScript, Git, Axios, Sass, BootStrap, TailwindCss, MaterialUI, react-hook-form, react-table, react-spring",
  ];

  return (
    <>
      <animated.div
        className={`${className} ${s.card} bg-transparent `}
        style={style}
      >
        <div
          className={`
            ${s.inner} 
            ${flip ? s.flip : ""}
            box-border relative w-full h-4/5 `}
        >
          {side(s.front, "امید نشاطی", aboutMeSide)}
          {side(s.back, "مهارت های من", techSide)}
        </div>
        <div className="flex justify-around items-end box-border rounded-b-3xl w-full h-1/5 bg-gray-100 bg-opacity-100 overflow-hidden shadow-md">
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
