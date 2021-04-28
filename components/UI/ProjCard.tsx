export const ProjCard = ({
  imgSrc,
  imgAlt,
  projName,
  projTechUsed,
  projDescription,
}) => {
  return (
    <div className="sm:w-40 bg-gray-200 inline-block rounded-xl shadow-md">
      <div className="w-1/3">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="w-2/3">
        <h3>{projName}</h3>
        <div className="">
          <h4>تکنولوژی ها و پکیج های استفاده شده</h4>
          <p>{projTechUsed}</p>
        </div>
        <p>{projDescription}</p>
      </div>
    </div>
  );
};
