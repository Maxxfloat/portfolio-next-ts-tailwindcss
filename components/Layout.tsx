const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-400">
      {children}
    </div>
  );
};

export default Layout;
