import { Profile, profiles } from "./profileRepository";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import renderStars from "./starsRating";

export interface ProfileProps {
  profile: Profile;
}
const ProfileComponent: React.FC<ProfileProps> = (
  { profile },
  index: number
) => {
  
  function Button({ title }: { title: string }) {
    return <button>{title}</button>;
  }
  return (
    <>
      <div
        className="border-2 #e0e0e0 rounded-lg p-8 pt-8 m-8 mt-32 text-center shadow-gray-100 relative"
        style={{ minWidth: "400px" }}
      >
        <div className="absolute top-2 left-2 flex items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              profile.online ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <p className="text-xs ml-2">
            {profile.online ? "Online" : "Offline"}
          </p>
        </div>
        <div className="absolute top-4 right-4 flex flex-col items-end">
          <div className="text-xs mb-1">{renderStars(profile.avrRating)}</div>
          <p className="text-xs">{profile.numReviews} reviews</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-32">
            <div className="border border-gray-300 rounded-full p-4 bg-white">
                <div className="border border-gray-300 rounded-full p-1">
                <Image
                    src={profile.pictureUrl}
                    alt={`${profile.name} taskninja profile`}
                    height={200}
                    width={200}
                    className="rounded-full mb-4 object-cover mx-auto"
                />
                </div>
            </div>
        </div>
        <p className="text-lg font-bold mt-16" >{profile.name}</p>

        <p className="text-sm">{profile.role}</p>
        <p className="text-xs text-gray-700 m-6">{profile.description}</p>
        <div className="flex flex-row justify-center gap-8">
            <Button title="Chat" />
            <Button title="View Profile" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-red-300"></div>
        <div className="absolute bottom-0 left-0 pointer-events-none">
            <div className="border-l-2 border-b-2 border-red-300 absolute"></div>
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none">
            <div className="border-r-2 border-b-2 border-red-300 absolute"></div>
        </div>
            
        
      </div>
    </>
  );
};

export default ProfileComponent;
