import React from "react";
import Sidebar from "./pages/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/navbar/Navbar";
import Edu from "./pages/edu/Edu";
import Russian from "./pages/russian/Russian";
import English from "./pages/english/English";
import Contact from "./pages/contact/Contact";
import Music from "./pages/music/Music";
import Movie from "./pages/movies/Movie";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <main className="">
              <Routes>
                <Route path="/" element={<Edu />} />
                <Route path="/rus" element={<Russian />} />
                <Route path="/eng" element={<English />} />
                <Route path="/music" element={<Music />} />
                <Route path="/movie" element={<Movie />} />

                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
