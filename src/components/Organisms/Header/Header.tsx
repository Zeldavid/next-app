"use client";

import Select from "@/components/Atoms/Select/Select";
import { DataGame } from "../GameList/GameList";

interface HeaderProps {
  data: DataGame;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Header = ({ data, onChange }: HeaderProps) => {
  return (
    <header className=" flex flex-col gap-y-12 w-full h-auto py-12 px-32 max-sm:py-8 max-sm:px-6">
      <div className="flex">
        <h4 className="font-bold text-4xl">Top Sellers</h4>
      </div>
      <div className="w-full flex justify-end max-sm:justify-normal">
        <div className="flex w-[350px] max-sm:w-full gap-x-6 justify-end max-sm:justify-between items-end">
          <p>Genre | All</p>
          <Select options={data.availableFilters} onChange={onChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
