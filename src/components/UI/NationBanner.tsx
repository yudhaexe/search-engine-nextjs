import React, { useState } from "react";
import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
interface NationBannerProps {
  name: string;
  flagImageUrl: string;
}

export const NationBanner: React.FC<NationBannerProps> = ({
  name,
  flagImageUrl,
}) => {
  return (
    <div className="flex gap-2">
      <div className="font-bold leading-10 text-5xl ">{name}</div>
      <div className="">
        {" "}
        <Image
          src={flagImageUrl}
          alt={`${name} flag`}
          width={46}
          height={30}
          className=" object-cover"
        />{" "}
      </div>
    </div>
  );
};
