import React, { useState, useRef, useEffect } from "react";
import { logo } from "../../Assests";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { allItems } from "../../Constants";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userSignout } from "../../Redux/amazonSlice";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
   const dispatch=useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const ref = useRef();
  const auth = getAuth();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sgn out");
        dispatch(userSignout())
      })
      .catch((error) => {
        console.log(error)
      });
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-black text-white  px-4 py-3 flex items-center gap-4">
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt- text-whiteText">
              Pune
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md hidden lgl:inline-flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-black font-titleFont flex items-center justify-center rounded-t1-md rounded-bl-md"
          >
            All{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>

          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-black boeder[1px] text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            className="h-full text-base text-black flex-grow outline-none border-none px-2 "
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {userInfo ? (
              <p className="text-sm text-gray-100 font-medium">
                {userInfo.userName}
              </p>
            ) : (
              <p className="text-xs mdl:text-xs text-white mdl:text-lightText font-light">
                Hello, Sign in
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-sm font-semibold -mt-1 text-whiteText">Orders </p>
        </div>
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-sm font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 font-semibold left-6 p-1 h-4 bg-[#f3a847] text-6 rounded-full flex justify-center items-center ">
                {/* {products.length > 0 ? products.length : 0} */}
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>

        {userInfo && (
          <div
            onClick={handleLogOut}
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
