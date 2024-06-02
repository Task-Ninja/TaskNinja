import React from "react";
import Tabs from "../ui/tabs";
import Image from "next/image";
import MenuSelection from "../ui/menuSelection";
import TaskCollapse from "../ui/taskCollapse";

const Sidebar = () => {
  return (
    <aside className=" py-2  flex flex-col justify-between">
      <div
        className=" "
        style={{
          overflowY: "auto",
        }}
      >
        <Tabs
          list={[
            { label: "Client", value: "client" },
            { label: "Ninja", value: "ninja" },
          ]}
        />
        <div className="flex flex-col items-center">
          <Image
            src={"/Switch.png"}
            width={150}
            height={150}
            alt="Switch Image"
            
          />
        </div>
        <MenuSelection />
        <TaskCollapse />
      </div>
      <div className="px-2   bg-white ">
        <div className="flex gap-2">
          <Image
            src={"/helpCircleIcon.svg"}
            height={20}
            width={20}
            alt="helpdesk icon"
          />
          <span>Helpdesk</span>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/logoutIcon.svg"}
            height={20}
            width={20}
            alt="logout icon"
          />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
