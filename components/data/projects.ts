import { ProjCard } from "../UI/ProjCard";

interface ProjCard {
  projName: string;
  imgSrc: string;
  imgAlt: string;
  projTechUsed: string[];
  projDescription: string;
}

type ProjCardArray = Array<ProjCard>;

export const projects: ProjCardArray = [
  {
    projName: "SIM Card",
    imgSrc: "",
    imgAlt: "sim project",
    projTechUsed: ["ReactJS", "Redux", "Axios", "sass", "react-table"],
    projDescription: "وب سایت خرید و فروش سیم کارت بدون واسطه",
  },
];
