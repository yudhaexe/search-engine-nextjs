import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/base";

interface CountryData {
  name: string;
}

interface CallingCodeInfoCardProps {
  callingCode: string;
}

interface CountriesResponse extends Array<CountryData> {}

const CallingCodeInfoCard: React.FC<CallingCodeInfoCardProps> = ({
  callingCode,
}) => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false); // State to manage tooltip visibility

  useEffect(() => {
    axios
      .get<CountriesResponse>(
        `https://restcountries.com/v2/callingcode/${callingCode}`
      )
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch countries");
        setLoading(false);
      });
  }, [callingCode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const countryNames = countries.map((country) => country.name).join(", ");

  return (
    <div className="relative flex flex-col items-start">
      <h2 className="text-lg font-medium leading-5 mb-1">Calling Code</h2>
      <div className="font-bold text-5xl text-[#8362F2]">{callingCode}</div>
      <div className="flex items-center mt-3">
        <Button
          className="text-[#8362F2] font-bold py-1 px-2"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {countries.length} {countries.length === 1 ? "country" : "countries"}
        </Button>
        <span>with this calling code</span>
        {showTooltip && (
          <div
            className="absolute z-10 py-2 px-3 text-sm font-medium text-white bg-black rounded-lg shadow-sm"
            style={{ top: "100%", left: "0" }}
          >{countryNames}
          </div>
        )}
      </div>
    </div>
  );
};

export default CallingCodeInfoCard;
