import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const sidebarItem = [
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
];
function Sidebar() {
  return (
    <div className="relative left-0 w-auto p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden">
      {sidebarItem.map((item, index) => {
        return (
          <div key={index} className="flex my-3">
            {item.icons}
            <p className="ml-5">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
