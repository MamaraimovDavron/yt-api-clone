import React, { Children } from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Body = () => {
  return (
    <div className="flex mt-16">
      <Sidebar />
      <Outlet />
    </div>
  );
};
