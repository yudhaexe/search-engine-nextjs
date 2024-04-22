"use client";

import InfoCard from "@/components/UI/InfoCard";
import { NationBanner } from "@/components/UI/NationBanner";
import NationNativeTags from "@/components/UI/NationNativeTags";
import { Button } from "@mui/base";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Home() {
  return (
    <div className="container mt-20">
      <Button className="bg-[#8362F2] text-white px-3 py-3 rounded-lg font-medium leading-7 flex gap-2">
        <ArrowBackIcon className="place-self-center" />
        Back To Home Page
      </Button>
      <div className="flex flex-col mt-12">
        <NationBanner
          name="Indonesia"
          flagImageUrl="https://flagcdn.com/id.svg"
        />
        <NationNativeTags
          tags={["ID", "Republic Of Indonesia", "Republik Indonesia"]}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-5">
        <InfoCard
          type={1}
          data={{
            latlong: "6.1751° S, 106.8650° E",
            coordinates: "Jakarta, Indonesia",
            imageUrl: "https://flagcdn.com/id.svg",
          }}
        />
        <InfoCard
          type={2}
          data={{
            capital: "Jakarta",
            region: "Asia",
            subregion: "Southeast Asia",
          }}
        />
      </div>
      <div className="gap-5">
        <InfoCard
          type={3}
          data={{
            header: "Welcome to Jakarta",
            content: "The bustling capital of Indonesia.",
            description:
              "Jakarta is known for its vibrant culture and history.",
          }}
        />
      </div>
    </div>
  );
}
