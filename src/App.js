import React from "react";

import categoriesData from "./data/categories";
import Directory from "./components/directory/directory.component";

const App = () => {
  return <Directory categories={categoriesData} />;
};

export default App;
