"use client";
import React, { useState } from "react";

interface CollapseItem {
  title: string;
  pendingItems: number;
  children?: CollapseItem[];
  path?: string;
}

interface CollapseProps {
  item: CollapseItem;
}

const Collapse: React.FC<CollapseProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <div
        className="flex justify-between items-center p-3 cursor-pointer"
        onClick={toggleCollapse}
      >
        <h2 className="font-bold">{item.title}</h2>
        {item?.children && <span>{isOpen ? "-" : "+"}</span>}
      </div>
      {isOpen && item.children && (
        <div className="p-3 border-t">
          {item.children.map((child, index) => (
            <Collapse key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collapse;
