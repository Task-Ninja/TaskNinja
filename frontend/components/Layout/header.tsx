import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import SearchInput from "@/components/ui/searchInput";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b-2">
      <h1 style={{ flex: "1" }}>TASKNINJA</h1>
      <div style={{ flex: "3" }}>
        <Label htmlFor="picture" hidden>
          Picture
        </Label>
        <SearchInput id="picture" type="text" placeholder="Search Ninjas" />
      </div>
      <div
        style={{ flex: "1" }}
        className="flex gap-2 items-center justify-end"
      >
        <Image
          src="/notificationIcon.svg"
          alt="profile"
          width={20}
          height={20}
          className="rounded-full"
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "yellowgreen",
            textAlign: "center",
          }}
        >
          L
        </div>
      </div>
    </header>
  );
};

export default Header;
