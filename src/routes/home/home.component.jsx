import React from "react";

import categoriesData from "../../data/categories.json";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return <Directory categories={categoriesData} />;
};

export default Home;
