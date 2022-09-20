import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit({ setdata, data }) {
  const { id } = useParams();
  const object = data.find((el) => el.id == id);

  const navigate = useNavigate();
  const [input, setinput] = useState(object.task);
  function EditTask() {
    const newdata = { id: id, task: input, complete: false };
    setdata((data) => [...data, newdata]);
    navigate("/");
  }
  return (
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h1 className="text-capitalize text-center">Todo Input</h1>
        <div className="card ">
          <div className="card-body">
            <div className="d-flex">
              <div
                className="p-1 bg-info inline-block"
                style={{ width: "30px ", height: "30px" }}
              >
                <img
                  src="/icons/book-solid.svg"
                  style={{
                    width: "100% ",
                    height: "100%",
                    position: "relative",
                    bottom: "2px",
                  }}
                  alt="icon"
                />
              </div>
              <input
                value={input}
                onChange={(event) => setinput(event.target.value)}
                placeholder="Input/Edit Todo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={EditTask}
                class="btn btn-info mt-3 "
                style={{ color: "#fff", width: "50%" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
