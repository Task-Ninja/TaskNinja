import Image from "next/image";
import React from "react";

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex gap-0 text-nowrap text-xs">
        <div className="border flex items-center gap-1 p-1 rounded-l-md">
          <Image src="/boardIcon.svg" width={20} height={20} alt="Board Icon" />
          Board View
        </div>
        <div className="border flex items-center gap-1 px-1 rounded-r-md">
          <Image src="/ListIcon.svg" width={20} height={20} alt="Board Icon" />
          List View
        </div>
      </div>
      <div className="flex items-center gap-1  rounded-md border px-2   w-3/5">
        <Image src="/searchIcon.svg" alt="Search Icon" width={15} height={15} />

        <input
          placeholder="Search Tasks"
          type="search"
          className="w-full placeholder:text-muted-foreground focus-visible:border-transparent flex py-1 bg-transparent   text-sm focus:outline-none  focus:border-zinc-100 font-bold"
        />
      </div>
      <div className="flex items-center gap-2 ">
        <div className="rounded-md border p-2">
          <Image
            src="/settingIcon.svg"
            alt="Search Icon"
            width={15}
            height={15}
          />
        </div>
        <div className="rounded-md border p-2">
          <Image
            src="/messageIcon.svg"
            alt="Search Icon"
            width={15}
            height={15}
          />
        </div>
        <div className="rounded-md border p-2">
          <Image src="/homeIcon.svg" alt="Search Icon" width={15} height={15} />
        </div>
        <div className="rounded-md border p-2">
          <Image
            src="/exploreIcon.svg"
            alt="Search Icon"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
