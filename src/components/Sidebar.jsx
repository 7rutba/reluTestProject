import React from "react";
import {
  GrHomeRounded,
  GrNotification,
  GrShop,
  GrChat,
  GrUserSettings,
  GrLogout,
} from "react-icons/gr";
import { CiWallet } from "react-icons/ci";

const Sidebar = ({ handlelogout }) => {
  const sidebarItems = [
    { name: "Home", icon: <GrHomeRounded /> },
    { name: "Notifications", icon: <GrNotification /> },
    { name: "Shop", icon: <GrShop /> },
    { name: "Conversations", icon: <GrChat /> },
    { name: "Wallet", icon: <CiWallet /> },
    { name: "My Profile", icon: <GrUserSettings /> },
    { name: "Settings", icon: <GrUserSettings /> },
  ];

  return (
    <div className="w-2/12 ">
      <div className=" bg-gray-100 text-white mt-4 flex flex-col justify-between">
        <div className="flex flex-col p-4">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-black space-x-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="p-4 mt-2">
          <div
            onClick={handlelogout}
            className="flex items-center space-x-3 p-3 hover:bg-gray-200 text-green-400  rounded-lg cursor-pointer"
          >
            <GrLogout />
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div className=" text-xs text-black">
        <p className="line-clamp-1">2024© Rutba </p>
        <p className="line-clamp-1">Developed by Ritesh Kumar</p>
      </div>
    </div>
  );
};

export default Sidebar;
