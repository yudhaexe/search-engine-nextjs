'use client'

import { SearchBar } from "../public/components/UI/SearchBar";


export default function Home() {
  const handleSearchSubmit = (query: string) => {
    console.log("Search Query:", query);
  };

  return (
    <SearchBar onSubmit={handleSearchSubmit} />
  );
}
