import React, { useEffect, useState } from "react";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";

export default function Home({ data, setdata }) {
  const [filterData, setfilterData] = useState(data);
  const [searchInput, setsearchInput] = useState("");
  console.log(searchInput);
  function filter(type) {
    if (type === "done") {
      const filtered = data.filter((object) => object.complete);
      setfilterData(filtered);
    }
    if (type === "todo") {
      const filtered = data.filter((object) => !object.complete);
      setfilterData(filtered);
    }
    if (type === "all") {
      setfilterData(data);
    }
    if (type === "search") {
      const filtered = data.filter((object) =>
        object.task.toLowerCase().includes(searchInput.toLocaleLowerCase())
      );
      setfilterData(filtered);
    }
  }
  useEffect(() => {
    setfilterData(data);
  }, [data]);
  return (
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h1 className="text-capitalize text-center">TodoSearch</h1>
        <TodoSearch
          searchInput={searchInput}
          setsearchInput={setsearchInput}
          filter={filter}
        />
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-3">
          <h1 className="text-capitalize text-center">TodoList</h1>
          <TodoList
            Data={filterData}
            setdata={setdata}
            filter={filter}
            setfilterData={setfilterData}
          />
        </div>
      </div>
    </div>
  );
}
