import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function HeaderBottom() {
  const ref = useRef();
  const [sidebar, setSiderBar] = useState(false);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSiderBar(false);
      }
    });
  }, [ref, sidebar]);

  return (
    <div className="w-full px-4 h-[36] bg-amazon_light text-whiteText flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSiderBar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>

      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-black bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                {userInfo ?(<h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello,{userInfo.userName}
                </h3>):(
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello,Sign In
                </h3>
                )}
              </div>
              <SideNav
                title="Digital content & Devices"
                one="Amazon Music"
                two="Kindle E-reader & Books"
                three="Amazon Appstore"
              />
              <SideNav
                title="Shop by Department"
                one="Electronics"
                two="Computers"
                three="Smart Homes"
              />
              <SideNav
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNav
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact Us"
              />
              <span
                onClick={() => setSiderBar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBottom;
