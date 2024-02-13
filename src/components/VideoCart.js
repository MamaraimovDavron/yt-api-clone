import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import API_KEY from "../constant/youtube";

export const VideoCart = ({ item }) => {
  const [ytIcon, setYtIcon] = useState("");

  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
      console.log(res);
    } catch (error) {}
  };

  useEffect(() => {
    getYoutubeChannelName();
  }, []);
  return (
    <div className="w-94 cursor-pointer my-2">
      <img
        className="rounded-xl w-full"
        src={item.snippet.thumbnails.medium.url}
        alt="yt-video"
      />
      <div>
        <div className="flex mt-2">
          <Avatar src={ytIcon} size={34} round={true} />
          <div className="ml-2">
            <h1 className="font-bold">{item.snippet.title}</h1>
            <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
