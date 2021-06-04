interface ProjCard {
  projName: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  projTechUsed: string[];
  projDescription: string;
  index: number;
}

export const ProjCard: React.FC<ProjCard> = ({
  imgSrc,
  imgAlt,
  projName,
  link,
  projTechUsed,
  projDescription,
  index,
}) => {
  console.log("index: ", index);
  return (
    <div
      className={`bg-gray-200 flex flex-col rounded-xl shadow-md overflow-hidden space-y-4
      ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      <div className="h-52 md:w-2/4 md:h-full">
        <a href={link} target="_blank">
          <img className="w-full h-full" src={imgSrc} alt={imgAlt} />
        </a>
      </div>
      <div className=" mx-auto p-3 space-y-4">
        <h3 className="font-bold">{projName}</h3>
        <div className="">
          <h4 className="text-right">تکنولوژی ها و پکیج های استفاده شده</h4>
          <p>{projTechUsed.map((tech) => tech + ", ")}</p>
        </div>
        <div className="" dir="rtl">
          <h4 className="font-bold text-lg">شرح پروژه:</h4>
          <p className="inline-block">{projDescription}</p>
        </div>
        <div>
          <a className="text-blue-600" href={link} target="_blank">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};
