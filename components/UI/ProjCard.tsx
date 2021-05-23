import React from "react";

interface ProjCard {
  projName: string;
  imgSrc: string;
  imgAlt: string;
  projTechUsed?: string[];
  projDescription?: string;
}

export const ProjCard: React.FC<ProjCard> = ({
  imgSrc,
  imgAlt,
  projName,
  projTechUsed,
  projDescription,
}) => {
  return (
    <div className="bg-gray-200 flex flex-col rounded-xl shadow-md space-y-4 md:flex-row">
      <div className="w-1/3 overflow-hidden h-44">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="mx-auto p-3 space-y-4">
        <h3 className="font-bold">{projName}</h3>
        <div className="">
          <h4 className="text-right">تکنولوژی ها و پکیج های استفاده شده</h4>
          <p>{projTechUsed.map((tech) => tech + ", ")}</p>
        </div>
        <div className="" dir="rtl">
          <h4 className="font-bold text-lg">شرح پروژه:</h4>
          <p className="inline-block">{projDescription}</p>
        </div>
      </div>
    </div>
  );
};
