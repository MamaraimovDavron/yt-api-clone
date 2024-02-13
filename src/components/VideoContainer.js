import React, { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constant/youtube";

export const VideoContainer = () => {
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);
  return <div></div>;
};
