import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HeaderItem from "../components/HeaderItem";

const Header = () => {
  return (
    <div className="header flex items-center justify-between text-white py-[1.25rem] pr-[3.125rem] pl-[4.6875rem] overflow-hidden max-md:flex-col">
      <div className="flex items-center gap-[1.5625rem] text-center max-lg:gap-[0.7813rem]">
        <HeaderItem Icon={HomeOutlinedIcon} text="Home" />
        <HeaderItem Icon={FlashOnOutlinedIcon} text="Trending" />
        <HeaderItem Icon={VerifiedOutlinedIcon} text="Verified" />
        <HeaderItem Icon={VideoLibraryOutlinedIcon} text="Collections" />
        <HeaderItem Icon={SearchIcon} text="Search" />
        <HeaderItem Icon={PersonOutlineIcon} text="Account" />
      </div>

      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="Hulu Logo"
        className="object-contain w-[12.5rem] h-[6.25rem]"
      />
    </div>
  );
};

export default Header;
