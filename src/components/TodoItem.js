import React from "react";
import { useNavigate } from "react-router-dom";

export default function TodoItem({ object, deleteTask, UpdateComplete }) {
  const navigate = useNavigate();
  return (
    <div class="card" style={{ marginBottom: "10px" }}>
      <div class="d-flex justify-content-between card-body">
        <div>{object.task}</div>
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            checked={object.complete}
            onChange={(event) => UpdateComplete(event.target.checked)}
          />

          <button
            onClick={() => navigate("/Edit/" + object.id)}
            style={{
              width: "30px",
              border: "0",
              background: "transparent",
              margin: "10px",
            }}
          >
            <img alt="icon trash" src="/icons/pencil-solid.svg" />
          </button>

          <button
            onClick={() => deleteTask(object.id)}
            style={{ width: "30px", border: "0", background: "transparent" }}
          >
            <img alt="icon pencil" src="/icons/trash-can-solid.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
