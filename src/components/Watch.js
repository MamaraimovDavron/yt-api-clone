import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import API_KEY from "../constant/youtube";
import Avatar from "react-avatar";
import img from "../images/img.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";

export const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );

      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div className="ml-4">
      <div>
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-[35%]">
            <div className="flex">
              <Avatar src={img} size={34} round={true} />
              <h1 className="font-bold ml-2">
                {singleVideo?.snippet.channelTitle}
              </h1>
            </div>
            <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>

          <div className="flex items-center w-[40%] justify-between mt-2">
            <div className="flex w-33 justify-between items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <AiOutlineLike size="20px" className="mr-5" />
              <AiOutlineDislike size="20px" />
            </div>
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <PiShareFatLight size="20px" className="mr-2" />
              <span>Share</span>
            </div>
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <GoDownload size="20px" className="mr-2" />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};
