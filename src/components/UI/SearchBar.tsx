import React, { useState, useCallback } from "react";
import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash/debounce";
import { Button } from "@mui/base";
import Link from "next/link";

interface Country {
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
}

export const SearchBar: React.FC = ({}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");

  const apiUrl: string = `https://restcountries.com/v3.1/name/`;

  const fetchSuggestions = async (query: string): Promise<void> => {
    if (!query.trim()) {
      setSuggestions([]);
      setError("");
      return;
    }
    try {
      const response = await fetch(`${apiUrl}${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Response not OK");
      }
      const data: Country[] = await response.json();
      if (data.length === 0) {
        throw new Error("No data");
      }
      setSuggestions(data.slice(0, 5));
      setError("");
    } catch (error) {
      setError("Data Not Found");
      setSuggestions([]);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce((nextValue: string) => {
      fetchSuggestions(nextValue);
    }, 500),
    []
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setInputValue(value);
    debouncedFetchSuggestions(value);
  };

  return (
    <div className="group relative">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type Country Name"
        className="w-full rounded-lg border border-gray-300 bg-white py-5 pl-5 pr-12 text-sm"
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
        type="button"
        className="absolute inset-y-0 right-0 p-2 fill-current text-gray-500 group-focus:fill-[#8362F2]"
      >
        <SearchIcon />
      </IconButton>
      {(suggestions.length > 0 || error) && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg z-10 flex flex-col ">
          {error ? (
            <li className="p-2 text-red-500">{error}</li>
          ) : (
            suggestions.map((country, index) => (
              <Link key={index} href={`/detail?name=${country.name.common}`}>
                <Button className="px-6 py-4 hover:bg-gray-100 cursor-pointer text-left font-medium text-base leading-5">
                  {country.name.common}
                </Button>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};
