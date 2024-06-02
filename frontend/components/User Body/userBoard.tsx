import React from "react";
import PostInputBar from "./PostInputBar";
import FilterBar from "./filterBar";
import { TaskData } from "./types";
import Image from "next/image";
import FacePile from "@/components/ui/facePile";
interface TasksProps {
  taskData: TaskData[];
}

const UserBoard: React.FC<TasksProps> = ({ taskData }) => {
  return (
    <div className="py-2 px-4 w-full flex-col gap-4 justify-center">
      <PostInputBar />
      <FilterBar />
      <div style={{ columns: "4 300px", columnGap: "1 rem" }}>
        {taskData.map(({ title, tags, status, tasks, description }, index) => (
          <div
            key={index}
            style={{ flex: "1 " }}
            className={`inline-block  border p-4 rounded-sm  my-2 ${
              status === "Completed"
                ? "border-[#008000]"
                : status === "can't Find"
                ? "border-[#FF0000]"
                : status === "Draft"
                ? "border-[#808080]"
                : status === "In Progress"
                ? "border-[#0000FF]"
                : "border-[#FFA500]"
            }`}
          >
            <div>
              <div className="flex items-start gap-2 justify-between">
                <span className="font-bold text-slate">{title}</span>
                <div
                  className={`rounded-lg px-2 py-1 text-white ${
                    status === "Completed"
                      ? "bg-[#008000]"
                      : status === "can't Find"
                      ? "bg-[#FF0000]"
                      : status === "Draft"
                      ? "bg-[#808080]"
                      : status === "In Progress"
                      ? "bg-[#0000FF]"
                      : "bg-[#FFA500]"
                  }`}
                >
                  {status}
                </div>
              </div>
              <div>
                {description}
                <ul className="mt-2">
                  {tasks.length > 0 &&
                    tasks.map(({ title, status }, index) => (
                      <li className="list-none" key={index}>
                        <input
                          type="checkbox"
                          readOnly
                          checked={status === "Completed"}
                          disabled={status === "Completed"}
                        />{" "}
                        {title}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap text-xs items-center">
              {tags.length > 0 &&
                tags.map(
                  ({ label, value }, tagIndex) =>
                    (value.length > 0 || value) && (
                      <div
                        className="bg-gray-200 rounded-sm px-2 py-1 flex items-center gap-1"
                        key={tagIndex}
                      >
                        {label === "Budget" ? (
                          <Image
                            src={"/BudgetIcon.svg"}
                            height={20}
                            width={20}
                            alt="Budget Icon"
                          />
                        ) : ["Estimated Time", "Deadline"].includes(label) ? (
                          <Image
                            src={"/ClockIcon.svg"}
                            height={20}
                            width={20}
                            alt="Clock Icon"
                          />
                        ) : label === "Venue" ? (
                          <Image
                            src={"/LocationIcon.svg"}
                            height={20}
                            width={20}
                            alt="Clock Icon"
                          />
                        ) : label === "Assigned To" ? (
                          value.length > 0 && <FacePile users={value} />
                        ) : (
                          label
                        )}{" "}
                        {label !== "Assigned To" && value}
                      </div>
                    )
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBoard;
