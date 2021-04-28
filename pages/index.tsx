import Layout from "../components/Layout";

import { ProjCard } from "../components/UI/ProjCard";

export default function index() {
  return (
    <Layout>
      <div className=" xl:w-1/2 bg-blue-400 space-y-6">
        <div className="h-80 space-x-8 flex">
          <div className="bg-white w-1/3 p-8 box-border rounded-3xl shadow-md">
            <img className="" alt="Omid Neshati photo"></img>
          </div>
          <div className="bg-white flex-1 p-8 box-border text-right rounded-3xl shadow-md">
            <h1>امید نشاطی</h1>
            <p>توسعه دهنده وب</p>
          </div>
        </div>
        <div className="w-full bg-white box-border rounded-3xl shadow-md">
          <h2>نمونه کار</h2>
          <div></div>
        </div>
        <div className="w-full bg-white box-border rounded-3xl shadow-md">
          <h2>برای ارتباط با من می‌تونید از</h2>
          <ul className="">
            <li></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
