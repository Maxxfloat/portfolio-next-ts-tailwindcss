import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-auto bg-pink-400">
      {children}
    </div>
  );
};

export default Layout;
