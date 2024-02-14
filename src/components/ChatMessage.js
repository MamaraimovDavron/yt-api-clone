import React from "react";
import Avatar from "react-avatar";
import img from "../images/img.jpg";

export const ChatMessage = ({ item }) => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar src={img} size={35} round={true} />
      </div>

      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
};
