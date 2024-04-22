import Image from "next/image";
import React from "react";

interface ComponentProps {
  type: 1 | 2 | 3;
  data: {
    latlong?: string;
    coordinates?: string;
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
        <div className="flex flex-1 min-w-0 justify-between items-center shadow-sm p-4">
          <div className="pr-4">
            <div>{data.latlong}</div>
            <div>{data.coordinates}</div>
          </div>
          <Image
            width={46}
            height={30}
            src={data?.imageUrl}
            alt="National Flag"
            className="shadow-sm"
          />
        </div>
      );
    case 2:
      return (
        <div className="shadow-sm p-4 flex-1 min-w-0">
          <div>{data.capital}</div>
          <div>{data.region}</div>
          <div>{data.subregion}</div>
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
