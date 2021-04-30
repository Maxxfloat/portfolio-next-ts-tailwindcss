import { Fragment } from "react";

import Layout from "../components/Layout";
import { ProjCard } from "../components/UI/ProjCard";
import { projects } from "../components/data/projects";
import ContactMe from "../components/ContactMe";

export default function index() {
  return (
    <Layout>
      <div className="md:w-3/4 xl:w-2/3 2xl:w-1/2 space-y-6 m-6">
        <div className="space-y-6 flex flex-col md:space-x-8 md:flex-row md:h-80 md:space-y-0">
          <div className="bg-white p-5 box-border rounded-3xl shadow-md overflow-hidden h-72 md:h-full md:w-1/3">
            <img className="" alt="Omid Neshati photo"></img>
          </div>
          <div className="bg-white p-5 box-border text-right rounded-3xl shadow-md h-96 md:h-full md:w-2/3">
            <h1>امید نشاطی</h1>
            <p>توسعه دهنده وب</p>
          </div>
        </div>
        <div className="w-full bg-white box-border rounded-3xl shadow-md p-5 space-y-4">
          <h2 className="text-right">نمونه کار</h2>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((proj) => (
              <Fragment key={proj.projName}>
                <ProjCard {...proj} />
              </Fragment>
            ))}
          </div>
        </div>
        <div
          className="w-full bg-white box-border rounded-3xl shadow-md px-10 py-6"
          dir="rtl"
        >
          <div className="space-y-2">
            <h2>راه های ارتباط با من</h2>
            <ContactMe />
          </div>
        </div>
      </div>
    </Layout>
  );
}
