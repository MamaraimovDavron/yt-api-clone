import React from "react";

const buttonList = [
  "All",
  "JavaScript",
  "Java",
  "Live",
  "Music",
  "Mix",
  "Songs",
  "Vlogs",
  "Trending",
  "Programming",
];

const ButtonList = () => {
  return (
    <div className="py-4">
      {buttonList.map((item, index) => {
        return (
          <button
            key={index}
            className="bg-gray-200 font-medium mx-2 px-4 py-1 rounded-md"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
