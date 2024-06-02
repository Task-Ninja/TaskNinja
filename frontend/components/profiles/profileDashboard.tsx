import React from "react";
import ProfileComponent from "@/components/profiles/Profile";
import { Profile } from "@/components/profiles/profileRepository";
import { profiles } from "@/components/profiles/profileRepository";

const ProfileDashboard : React.FC = () => {
  return(
    <div className="flex overflow-x-auto space-x-4 mt-12">
      {profiles.map((profile: Profile, index: number) => (
        <ProfileComponent key={index} profile={profile}/>
      ))}
    </div>
  )
}

export default ProfileDashboard;