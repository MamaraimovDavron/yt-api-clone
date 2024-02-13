import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constant/youtube";
import { VideoCart } from "./VideoCart";

export const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {video.map((item, index) => {
        return <VideoCart key={index} item={item} />;
      })}
    </div>
  );
};
