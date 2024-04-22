'use client'
import { Button } from "@mui/base";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton: React.FC = () => {
  return (
    <Button
      className="bg-[#8362F2] text-white px-3 py-3 rounded-lg font-medium leading-7 flex gap-2"
      onClick={() => window.history.back()}
    >
      <ArrowBackIcon />
      Back To Home Page
    </Button>
  );
};

export default BackButton;
