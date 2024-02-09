import React, { useEffect, useState } from "react";
import "./BaseLayout.scss";
import MenuBar from "./MenuBar/MenuBar";
import Header from "./Header/Header";
import { IconButton } from "@mui/material";
import { LuMenu } from "react-icons/lu";
import MenuBarMobile from "./MenuBar/MenuBarMobile";
import { useLocation } from "react-router-dom";

const BaseLayout = ({ children }) => {
  const location = useLocation()
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const handleDrawerClickedBranch = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

  useEffect(() => {
    if(drawerIsOpen) {
      handleDrawerClickedBranch()
    }
  }, [location?.pathname])
  return (
    <div className="app">
      <div className="d-flex">
        <div className="side-bar ">
          {/* ///MenuMobile */}
          <MenuBarMobile drawerIsOpen={drawerIsOpen} handleDrawerClickedBranch={handleDrawerClickedBranch} />
          {/* ///Menu */}
          <MenuBar />
        </div>
        <div className="body">
          <div className="menu-bar-mobile w-100">
            <div className=" d-flex px-3 py-2 align-items-center justify-content-between">
              <span>پنل مدیریت</span>
              <IconButton onClick={handleDrawerClickedBranch}>
                <LuMenu />
              </IconButton>
            </div>
          </div>
          <Header />
          <div className="body-container w-100">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
