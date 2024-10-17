import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <h1>This is the Navigation Component</h1>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h1>This is the Shop Component</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
