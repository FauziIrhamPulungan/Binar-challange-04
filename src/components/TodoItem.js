import React from "react";
import { useNavigate } from "react-router-dom";
import Pencil from "./icons/Pencil";
import Trash from "./icons/Trash";

export default function TodoItem({ object, deleteTask, UpdateComplete }) {
  const navigate = useNavigate();
  return (
    <div class="card" style={{ marginBottom: "10px" }}>
      <div class="d-flex justify-content-between align-items-center ">
        <div
          style={{
            marginLeft: "20px",
            textDecoration: object.complete ? "line-through" : "none",
            color: object.complete ? "red" : "black",
          }}
        >
          {object.task}
        </div>
        <div
          className="d-flex justify-content-between align-items-center py-2"
          style={{ gap: "25px", marginRight: "20px" }}
        >
          <input
            type="checkbox"
            checked={object.complete}
            onChange={(event) => UpdateComplete(event.target.checked)}
            style={{
              // width: "40px",
              border: "0",
              background: "transparent",
              margin: "10px",
            }}
          />

          <span
            onClick={() => navigate("/Edit/" + object.id)}
            style={{
              width: "20px",
              background: "transparent",
              // margin: "10px",
            }}
          >
            <Pencil />
          </span>

          <span
            onClick={() => deleteTask(object.id)}
            style={{
              width: "20px",
              background: "transparent",
              // margin: "10px",
            }}
          >
            <Trash />
          </span>
        </div>
      </div>
    </div>
  );
}
