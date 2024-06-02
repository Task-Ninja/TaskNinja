// components/FacePile.js
import Image from "next/image";
import React from "react";

const FacePile = ({ users }) => {
  return (
    <div className="flex -space-x-4 items-center">
      {users.map((user, index) => (
        <>
          <div key={index} className="relative group">
            <Image
              height={30}
              width={30}
              className="rounded-full border-2 border-white"
              src={user.imagePath}
              alt={user.name}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {user.name}
            </div>
          </div>
          {users.length === 1 && user.name}
        </>
      ))}
    </div>
  );
};

export default FacePile;
