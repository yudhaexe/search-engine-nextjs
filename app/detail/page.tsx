'use client'
import {  useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BackButton from "@/components/Detail/BackButton";
import CallingCodeInfoCard from "@/components/Detail/CountryCallingCode";
import CurrencyInfo from "@/components/Detail/CountryCurrency";
import CountryInformation from "@/components/Detail/CountryInformation";
import InfoCard from "@/components/UI/InfoCard";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  tld: string[];
  cca2: string;
  capital: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  latlng: number[];
  callingCodes: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
  currencies: { [key: string]: { name: string; symbol: string } };
}

export default function Detail() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [nation, setNation] = useState<Country | null>(null);

  useEffect(() => {
    async function fetchCountry() {
      if (typeof name === "string" && name) {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`);
          const data: Country[] = await response.json();
          if (data.length > 0) {
            setNation(data[0]);
          } else {
            throw new Error("No data found");
          }
        } catch (error) {
          console.error("Failed to fetch country", error);
          setNation(null);
        }
      }
    }

    fetchCountry();
  }, [name]);

  return (
    <div className="container mt-20">
      <BackButton />
        {nation ? (
          <>
            <CountryInformation nation={nation} />
            <div className="flex flex-row flex-wrap gap-5 mt-6">
              <InfoCard
                type={1}
                data={{
                  latlong: `${nation.latlng[0]}°, ${nation.latlng[1]}°`,
                  imageUrl: nation.flags.svg,
                }}
              />
              <InfoCard
                type={2}
                data={{
                  capital: nation.capital[0],
                  region: nation.region,
                  subregion: nation.subregion,
                }}
              />
            </div>
            <div className="flex gap-60 mt-10">
              <CallingCodeInfoCard callingCode={`${nation.idd.root.slice(1)}${nation.idd.suffixes[0]}`} />
              <CurrencyInfo currencyCode={Object.keys(nation.currencies)[0]} />
            </div>
          </>
        ) : (
          <div>No data found</div>
        )}
    </div>
  );
};
