import { ProjCard } from "../UI/ProjCard";

interface ProjCard {
  projName: string;
  imgSrc: string;
  imgAlt: string;
  link : string
  projTechUsed: string[];
  projDescription: string;
}

type ProjCardArray = Array<ProjCard>;

export const projects: ProjCardArray = [
  {
    projName: "SIM Card",
    imgSrc: "sim.png",
    imgAlt: "sim project",
    link : 'https://sh-nine.vercel.app/',
    projTechUsed: ["ReactJS", "Redux", "Axios", "sass", "react-table"],
    projDescription: "وب سایت خرید و فروش سیم کارت بدون واسطه",
  },
];
