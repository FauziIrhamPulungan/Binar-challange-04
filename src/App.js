import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Data from "./data.json";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

let dataLocal = Data;
const dataLocalStr = localStorage.getItem("data");
if (dataLocalStr) dataLocal = JSON.parse(dataLocalStr);
export default function App() {
  const [data, setdata] = useState(dataLocal);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
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
