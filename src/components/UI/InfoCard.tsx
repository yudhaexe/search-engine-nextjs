import Image from "next/image";
import React from "react";
import interselect from "@/assets/Intersect.png";

interface ComponentProps {
  type: 1 | 2 | 3;
  data: {
    latlong?: string;
    imageUrl?: string;
    capital?: string;
    region?: string;
    subregion?: string;
    header?: string;
    content?: string;
    description?: string;
  };
}

const InfoCard: React.FC<ComponentProps> = ({ type, data }) => {
  switch (type) {
    case 1:
      return (
        <div className="flex flex-1 min-w-0 justify-between items-center shadow-sm">
          <div className="px-3">
            <div className="font-medium text-lg">LatLong</div>
            <div className="font-bold text-4xl text-[#8362F2]">
              {data.latlong
                ? data.latlong
                    .split(",")
                    .map((coord) => parseFloat(coord).toFixed(1))
                    .join(", ")
                : ""}
            </div>
          </div>
          <Image
            width={204}
            height={120}
            src={interselect}
            alt="National Flag"
            className=""
          />
        </div>
      );
    case 2:
      return (
        <div className="shadow-sm p-4 flex-1 min-w-0 text-lg leading-5">
          <div>
            <span className="font-medium">Capital : </span>
            <span className="font-bold"> {data.capital}</span>
          </div>
          <div>
            <span className="font-medium">Region : </span>
            <span className="font-bold">{data.region}</span>
          </div>
          <div>
            <span className="font-medium">Sub Region : </span>
            <span className="font-bold">{data.subregion}</span>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="p-4">
          <h1 className="text-lg font-bold">{data.header}</h1>
          <p className="text-md">{data.content}</p>
          <p className="text-sm">{data.description}</p>
        </div>
      );
    default:
      return <div>Invalid component type</div>;
  }
};

export default InfoCard;
