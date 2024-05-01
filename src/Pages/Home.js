import React from "react";

import Banner from "../Components/Home/Banner";
import Products from "../Components/Home/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full bg-gray-100 -mt-10 lgl:-mt-24 xl:-mt-36 py-10">
        <Products />
      </div>
    </div>
  );
};

export default Home;
