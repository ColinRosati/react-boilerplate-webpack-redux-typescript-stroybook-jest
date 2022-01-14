import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "views/Home/Home";

const RouteTree: FC = () =>(
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
);

export default RouteTree;
