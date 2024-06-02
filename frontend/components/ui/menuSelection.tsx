"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuItem {
  label: string;
  imgPath: string;
  link: string;
}

const clientMenuList: MenuItem[] = [
  {
    label: "Home",
    imgPath: "/homeIcon.svg",
    link: "/client",
  },
  {
    label: "Explore",
    imgPath: "/exploreIcon.svg",
    link: "/client/explore",
  },
  {
    label: "Message",
    imgPath: "/messageIcon.svg",
    link: "/client/messages",
  },
  {
    label: "Favourite",
    imgPath: "/favoriteIcon.svg",
    link: "/client/favourite",
  },
  {
    label: "Settings",
    imgPath: "/settingIcon.svg",
    link: "/client/settings",
  },
];
const ninjaMenuList: MenuItem[] = [
  {
    label: "Dashboard",
    imgPath: "/homeIcon.svg",
    link: "/ninja",
  },
  {
    label: "All Tasks",
    imgPath: "/exploreIcon.svg",
    link: "/ninja/allTask",
  },
  {
    label: "Messages",
    imgPath: "/messageIcon.svg",
    link: "/ninja/messages",
  },
  {
    label: "Stats",
    imgPath: "/favoriteIcon.svg",
    link: "/ninja/stats",
  },
  {
    label: "My Profile",
    imgPath: "/settingIcon.svg",
    link: "/ninja/profile",
  },
];
const MenuSelection: React.FC = () => {
  const routePath = usePathname();

  return (
    <div className="mr-1">
      {(routePath.includes("/client") ? clientMenuList : ninjaMenuList).map(
        ({ label, imgPath, link }, index) => (
          <Link href={link} key={index}>
            <div
              className={`flex  p-2 gap-2  ${
                link === routePath && "bg-[#FEEFC3] rounded-r-full"
              }`}
            >
              <Image
                src={imgPath}
                height={20}
                width={20}
                alt={`${label} icon`}
                //   className="mx-2    "
              />
              <span>{label}</span>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default MenuSelection;
