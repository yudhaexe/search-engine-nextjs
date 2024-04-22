import {Banner} from "@/components/UI/Banner";
import Tags from "../UI/Tags";

interface CountryInformation {
  nation: {
    name: {
      common: string;
      official: string;
    };
    flags: {
      svg: string;
    };
    cca2: string;
  };
}

const CountryInformation: React.FC<CountryInformation> = ({ nation }) => {
  return (
    <div className="flex flex-col mt-12">
      <Banner
        name={nation.name.common}
        flagImageUrl={nation.flags.svg}
      />
      <Tags
        tags={[nation.cca2, nation.name.official, nation.name.common]}
      />
    </div>
  );
};

export default CountryInformation;
