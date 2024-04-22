import React, { useState } from "react";
import { IconButton, Input } from "@mui/material"; // Adjusted import for Input
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-full border border-gray-300 bg-white py-3 pl-5 pr-12 text-sm focus:border-[#8362F2] focus:outline-none focus:ring-[#8362F2] "
      />
      <IconButton type="submit" className="absolute inset-y-0 right-0 p-2">
        <SearchIcon />
      </IconButton>
    </div>
  );
};
