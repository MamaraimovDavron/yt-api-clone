import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import img from "../images/img.jpg";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
      <div className="flex w-[96%]  py-3 justify-between ">
        <div className="flex items-center ">
          <GiHamburgerMenu size="24px" />
          <img
            className="px-4"
            width={"115px"}
            src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png"
            alt="yt-clone"
          />
        </div>
        <div className="flex w-[40%] items-center">
          <div className="w-[100%] py-2 px-1 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>

          <button className="py-2 border border-gray-400 rounded-r-full px-4">
            <CiSearch size="24px" />
          </button>
        </div>
        <div className="flex w-[10%] justify-between items-center">
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <CiVideoOn size={"24px"} className="cursor-pointer" />
          <Avatar src={img} size={34} round={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
