import { useState } from "react";
import { animated } from "react-spring";
import s from "./DescriptionField.module.scss";

interface cardContentType {
  className: string;
  style: object;
}

const DescriptionField: React.FC<cardContentType> = ({ className, style }) => {
  const [flip, setFlip] = useState(false);

  const side = (style: string, content: JSX.Element) => {
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
      >
        <div className="h-3/4 block">{content}</div>
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

  // --- side content ---
  const aboutMeSide = (
    <div>
      <h3>امید نشاطی</h3>
      <p>
        ساکن شهر دزفول استان خوزستان ۲۳ سال دارم و به مدت دوسال است که مشغول به
        توسعه وب سایت هستم
      </p>
      <p>
        دلیل ورود من به این حوضه به مرحله عمل رسوندن ایده های خودم بود و الان
        انگیزه اصلی من به انجام رسوندن پروژه های بزرگ و کاربردی می‌باشد تا
        بتواند نیاز ها در عرصه وب را برطرف کنم
      </p>
      <p>
        در حال حاضر اشتیاق زیادی برای کسب تجربه و کار با یک تیم متخصص را دارم
      </p>
    </div>
  );

  const techSide = (
    <div>
      <h3>مهارت های من</h3>
      <p>
        تا به این لحظه تکنولوژی ها و پکیج هایی که از آن ها استفاده کرده‌ام شامل
      </p>
      <p>
        React, Redux, NextJS, TypeScript, Git, Axios, Sass, BootStrap,
        TailwindCss, MaterialUI, react-hook-form برای ساخت فرم, react-table برای
        ساخت جدول, react-spring برای ساخت انیمیشن و است
      </p>
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
            box-border relative w-full h-4/5 `}
        >
          {side(s.front, aboutMeSide)}
          {side(s.back, techSide)}
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
