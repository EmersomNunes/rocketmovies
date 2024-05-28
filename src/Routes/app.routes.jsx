import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { NewMovie } from "../Pages/NewMovie";
import { Profile } from "../Pages/Profile";
import { Preview } from "../Pages/Preview";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/newmovie" element={<NewMovie />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/preview/:id" element={<Preview />}/>
    </Routes>
  );
}