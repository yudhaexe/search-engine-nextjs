"use client";

import { SearchBar } from "@/components/UI/SearchBar";

export default function Home() {
  const handleSearchSubmit = (query: string) => {
    console.log("Search Query:", query);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-7xl text-center leading-[85px] my-10 font-bold">
        Country
      </div>
      <div className="px-[25%]  w-full">
        <SearchBar />
      </div>
    </div>
  );
}
