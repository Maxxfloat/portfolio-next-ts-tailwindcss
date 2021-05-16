import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="bg-blue-200 l fixed h-screen w-screen z-0" />
      <div className="flex flex-col items-center justify-center min-h-screen h-auto">
        {children}
      </div>
    </>
  );
};

export default Layout;
