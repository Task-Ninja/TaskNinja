import Image from "next/image";
import React from "react";

interface SearchInputProps {
  type?: string;
  placeholder?: string;
  id?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  type = "text",
  placeholder = "",
  id = "",
}) => {
  return (
    <div className="flex px-3 gap-1 bg-zinc-100 rounded-md ">
      <Image src="/searchIcon.svg" alt="Search Icon" width={15} height={15} />{" "}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="flex h-10 w-full bg-transparent  py-2 text-sm focus:outline-none  focus:border-zinc-100 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export default SearchInput;
