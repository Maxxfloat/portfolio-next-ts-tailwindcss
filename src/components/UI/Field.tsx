import React from "react";
import { animated } from "react-spring";

interface fieldProps {
  className: string;
  style?: Object;
  dir?: string;
}

const Field: React.FC<fieldProps> = ({ children, className, style, dir }) => {
  return (
    <animated.div
      className={`bg-gray-100 p-5 box-border shadow-md rounded-3xl pointer-events-auto ${className}`}
      style={style}
      dir={dir}
    >
      {children}
    </animated.div>
  );
};

export default Field;
