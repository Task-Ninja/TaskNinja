"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface TabItem {
  label: string;
  value: string | number;
}

interface TabsProps {
  list: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ list }) => {
  let routePath = usePathname();
  return (
    <div className="flex gap-0">
      {list.map(({ label, value }, index) => (
        <Link
          href={`/${value} `}
          key={index}
          className={`px-4 py-2 border ${
            index === list.length - 1 ? "rounded-r-full" : ""
          } ${routePath.split("/")[1] !== value && "bg-zinc-100"}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
