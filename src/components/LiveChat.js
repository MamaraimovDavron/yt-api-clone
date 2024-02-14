import React from "react";
import { ChatMessage } from "./ChatMessage";
import { useSelector } from "react-redux";

export const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);

  return (
    <div className="px-4 py-1">
      <div>
        {message.map((item, index) => {
          return <ChatMessage key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
