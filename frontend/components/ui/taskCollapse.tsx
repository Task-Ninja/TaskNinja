import React from "react";
import Collapse from "./collapse";

interface CollapseItem {
  title: string;
  pendingItems: number;
  children?: CollapseItem[];
  path?: string;
}

const TaskCollapse = () => {
  const collapseList: CollapseItem[] = [
    {
      title: "Ongoing Task",
      pendingItems: 10,
      children: [
        {
          title: "# Additional Calendar",
          children: [{ title: "dbkfbskdbfksd", path: "", pendingItems: 0 }],
          pendingItems: 10,
        },
        {
          title: "# Additional Calendar",
          children: [{ title: "dbkfbskdbfksd", path: "", pendingItems: 0 }],
          pendingItems: 10,
        },
      ],
    },
  ];

  return (
    <div>
      {collapseList.map((item, index) => (
        <Collapse key={index} item={item} />
      ))}
    </div>
  );
};

export default TaskCollapse;
