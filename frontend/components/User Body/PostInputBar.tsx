import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const PostInputBar = () => {
  return (
    <div className="flex justify-center h-[15vh] items-center">
      <div
        style={{ boxShadow: "2px 2px 8px 0px #00000040" }}
        className="w-3/6 rounded-2xl shadow-lg border p-2 flex  items-center h-[10vh]"
      >
        <input
          className="placeholder:text-muted-foreground focus-visible:border-transparent flex h-10 w-full bg-transparent  py-2 text-sm focus:outline-none  focus:border-zinc-100 "
          placeholder="Post your Task..."
          type="text"
        />
        <Image src="/enterIcon.svg" alt="Enter Icon" width={40} height={40} />
      </div>
    </div>
  );
};

export default PostInputBar;
