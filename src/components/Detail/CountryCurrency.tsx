import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/tooltip.css"; // Ensure your CSS handles visibility changes
import { Button } from "@mui/base";

interface CountryData {
  name: string;
  flags: {
    svg: string;
  };
}

interface CurrencyInfoProps {
  currencyCode: string;
}

interface CountriesResponse extends Array<CountryData> {}

const CurrencyInfo: React.FC<CurrencyInfoProps> = ({ currencyCode }) => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    axios
      .get<CountriesResponse>(
        `https://restcountries.com/v2/currency/${currencyCode}`
      )
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch countries by currency");
        setLoading(false);
      });
  }, [currencyCode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const countryNames = countries.map((country) => country.name).join(", ");

  return (
    <div className="relative flex items-start flex-col">
      <h2 className="text-lg font-medium leading-5 mb-1">Currency Code</h2>
      <div className="font-bold text-5xl text-[#8362F2]">{currencyCode}</div>

      <div className="flex items-center mt-3">
        <Button
          className="text-[#8362F2] font-bold py-1 px-2"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {countries.length} {countries.length === 1 ? "country" : "countries"}
        </Button>
        <span>with this currency</span>
        {showTooltip && (
          <div
            className=" absolute z-10 py-2 px-3 text-sm font-medium text-white bg-black rounded-lg shadow-sm"
            style={{ top: "100%", left: "0" }}
          >
            {countryNames}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyInfo;
