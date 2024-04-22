import React, { useState } from "react";
import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <div className="group relative">
      <Input
        type="text"
        placeholder="Type Country Name"
        className="w-full rounded-lg border border-gray-300 bg-white py-5 pl-5 pr-12 text-sm "
        sx={{
          "&.Mui-focused": {
            borderColor: "#8362F2",
            outline: "none",
            ring: "#8362F2",
          },
        }}
        disableUnderline={true}
      />
      <IconButton
        type="submit"
        className="absolute inset-y-0 right-0 p-2 fill-current text-gray-500 group-focus:fill-[#8362F2]"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};
