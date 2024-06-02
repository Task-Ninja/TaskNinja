import React from "react";
import ProfileComponent from "@/components/profiles/Profile";
import { Profile } from "@/components/profiles/profileRepository";
import { profiles } from "@/components/profiles/profileRepository";

const ProfileDashboard : React.FC = () => {
  return(
    <div className="grid-cols-2 g-16 p-16">
      {profiles.map((profile: Profile, index: number) => (
        <ProfileComponent key={index} profile={profile}/>
      ))}
    </div>
  )
}

export default ProfileDashboard;