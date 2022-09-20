import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./data.json";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

export default function App() {
  const [data, setdata] = useState(Data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} setdata={setdata} />} />
        <Route path="/Add" element={<Add setdata={setdata} />} />
        <Route
          path="/Edit/:id"
          element={<Edit data={data} setdata={setdata} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
