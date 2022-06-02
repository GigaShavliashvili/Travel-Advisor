import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  navigate,
} from "react-router-dom";
import { fetchCity } from "./api";
import MapPage from "./Page/MapPage";
import Home from "./Page/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Map/:id" element={<MapPage />}></Route>
        {/*   <Route
          path="/"
          element={
            isAuthentication ? (
              <Navigate replace to="/Dashboard" />
            ) : (
              <Navigate replace to="/Signin" />
            )
          }
        ></Route> */}

        {/*         <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
