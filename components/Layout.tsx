import React from "react";
import Particles from "react-particles-js";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* <div className="bg-blue-200 l fixed h-screen w-screen " /> */}
      <Particles
        className="fixed h-screen w-screen bg-blue-200"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#a459ff",
              animation: {
                enable: true,
                speed: 25,
              },
            },
            shape: {
              type: "triangle",
            },
            opacity: {
              value: 0.8,
              anim: {
                enable: true,
                opacity_min: 0.1,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 3,
                size_min: 5,
              },
            },
            line_linked: {
              enable: true,
              distance: 70,
              opacity: 0.6,
              color: "#000000",
            },
            move: {
              speed: 0.2,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "attract",
              },
              onClick: {
                mode: "repulse",
              },
            },
            modes: {},
          },
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen h-auto z-10">
        {children}
      </div>
    </>
  );
};

export default Layout;
