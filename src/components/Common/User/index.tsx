import React from "react";
interface IProfileProbs {
  userName: string;
  userProfilePicture?: string;
  hasProfilePicture: boolean;
  isOwner: boolean;
  userNameShow?: boolean;
  className?: string;
  email?: string;
  showEmailOrUser?: boolean; //user:true  email:false
  height?: number;
  width?: number;
  textSize?: number;
  textColor?: string;
}

const User: React.FC<IProfileProbs> = ({
  userName,
  userProfilePicture,
  hasProfilePicture,
  isOwner = false,
  className = "#4C6EF5",
  userNameShow = true,
  email,
  showEmailOrUser = true,
  height = 36,
  width = 36,
  textSize = 14,
  textColor,
}): JSX.Element => {
  // Extract initials from the user's name

  const initials = userName
    .split(" ")
    .map((namePart) => namePart.charAt(0))
    .join(" ");
  // Function to load the profile picture or show initials

  const renderProfilePicture = () => {
    if (hasProfilePicture) {
      return (
        <img
          src={
            userProfilePicture?.includes(process.env.REACT_APP_BASE_URL!)
              ? userProfilePicture
              : `${process.env.REACT_APP_BASE_URL}${userProfilePicture}`
          }
          alt="profile picture"
          className="rounded-full"
          width={width}
          height={height}
        />
      );
    } else {
      return (
        <div
          style={{ backgroundColor: className, height, width }}
          className={`rounded-full flex items-center justify-center }`}
        >
          <span
            style={{ color: textColor, fontSize: textSize }}
            className={`text-white font-semibold`}
          >
            {initials}
          </span>
        </div>
      );
    }
  };
  //Funcion to set username
  const user = () => {
    if (isOwner) return "من";
    if (!showEmailOrUser) return email;
    else return userName;
  };
  return (
    <div className="flex justify-start  gap-xs items-center">
      <div className="gap-xs justify-start items-center flex">
        {renderProfilePicture()}
        {userNameShow && <h1 className="flex ">{user()}</h1>}
      </div>
      {isOwner && (
        <div className="rounded-md flex text-center justify-center items-center bg-blue-secondary text-blue-primary text-[12px] w-[114px] h-[29px] px-[8px] py-[4px] ">
          Workspace Owner
        </div>
      )}
    </div>
  );
};

export default User;
