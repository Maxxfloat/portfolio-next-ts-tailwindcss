import React from "react";
import { Fragment } from "react";
import { useSprings } from "react-spring";

import Layout from "../components/Layout";
import { ProjCard } from "../components/UI/ProjCard";
import { projects } from "../components/data/projects";
import ContactMe from "../components/ContactMe";
import Field from "../components/UI/Field";

export default function index() {
  const [apear] = useSprings(4, (index) => ({
    // onStart: () => {
    //   console.log(index);
    //   console.log("apearindex ", apear[index]);
    // },
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: () => {
      const init = 900;
      if (index === 0) {
        return init;
      } else {
        return index * 400 + init;
      }
    },
  }));

  return (
    <Layout>
      <div className="md:w-3/4 xl:w-2/3 2xl:w-1/2 space-y-6 m-6 z-10">
        <div className="space-y-6 flex flex-col md:space-x-8 md:flex-row md:h-80 md:space-y-0 ">
          <Field className="h-72 md:h-full md:w-1/3" style={apear[0]}>
            <img className="" alt="Omid Neshati photo"></img>
          </Field>
          <Field
            className="text-right h-96 md:h-full md:w-2/3"
            style={apear[1]}
          >
            <h1>امید نشاطی</h1>
            <p>fff</p>
          </Field>
        </div>
        <Field className="w-full space-y-4" style={apear[2]}>
          <h2 className="text-right text-2xl font-bold">نمونه کار</h2>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((proj) => (
              <Fragment key={proj.projName}>
                <ProjCard {...proj} />
              </Fragment>
            ))}
          </div>
        </Field>
        <Field className="w-full px-10 py-6" dir="rtl" style={apear[3]}>
          <div className="space-y-2">
            <h2>راه های ارتباط با من</h2>
            <ContactMe />
          </div>
        </Field>
      </div>
    </Layout>
  );
}
