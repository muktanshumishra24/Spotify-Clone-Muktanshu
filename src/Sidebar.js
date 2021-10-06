import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import { MdHomeFilled } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { VscLibrary} from "react-icons/vsc";


function Sidebar() {
    return (
      <div className="sidebar">
        <img
          className="Sidebar-Logo"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png"
          alt=""
        />
        <SidebarOption Icon={MdHomeFilled} heading="Home" />
        <SidebarOption Icon={AiOutlineSearch} heading="Search" />
        <SidebarOption Icon={VscLibrary} heading=" Your Library" />
      </div>
    );
}

export default Sidebar;

