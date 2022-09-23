import TodoItem from "./TodoItem";

import React from "react";

export default function todolist({ Data, setdata, filter, setfilterData }) {
  function deleteTask(id) {
    const filtered = Data.filter((el) => el.id != id);
    setdata(filtered);
  }

  function deleteby(type) {
    if (type === "all") {
      setdata([]);
      setfilterData([]);
    }
    if (type === "done") {
      const filtered = Data.filter((el) => !el.complete);
      setdata(filtered);
      setfilterData(filtered);
    }
  }
  function UpdateComplete(checked, index) {
    let newData = Data;
    newData[index].complete = checked;
    setdata([...newData]);
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => filter("all")}
          class="btn btn-info mt-3 justify-content-between align-items-center"
          style={{ color: "#fff", width: "30%" }}
        >
          All
        </button>

        <button
          onClick={() => filter("done")}
          class="btn btn-info mt-3 justify-content-between align-items-center"
          style={{ color: "#fff", width: "30%" }}
        >
          Done
        </button>

        <button
          onClick={() => filter("todo")}
          class="btn btn-info mt-3 justify-content-between align-items-center"
          style={{ color: "#fff", width: "30%" }}
        >
          Todo
        </button>
      </div>
      <div style={{ marginTop: "50px" }}>
        {Data.map((object, index) => (
          <TodoItem
            object={object}
            deleteTask={deleteTask}
            UpdateComplete={(checked) => UpdateComplete(checked, index)}
          />
        ))}
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          position: "fixed",
          bottom: "-20px",
          width: "100%",
          left: "0",
          marginBottom: "50px",
        }}
      >
        <div
          className="d-flex justify-content-between "
          style={{ width: "58%" }}
        >
          <button
            onClick={() => deleteby("done")}
            class="btn btn-danger mt-3 justify-content-between align-items-center"
            style={{ color: "#fff", width: "45%" }}
          >
            Delete Done Task
          </button>

          <button
            onClick={() => deleteby("all")}
            class="btn btn-danger mt-3 justify-content-between align-items-center"
            style={{ color: "#fff", width: "45%" }}
          >
            Delete All Task
          </button>
        </div>
      </div>
    </div>
  );
}
