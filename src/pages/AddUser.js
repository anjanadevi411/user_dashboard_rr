import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = state;

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      setError("Pls input all the fields");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <div className="container">
      <h3>ADD USER</h3>
      {error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            value={name}
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Name"
            required="required"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            name="username"
            value={username}
            type="text"
            className="form-control"
            id="exampleInputUserName"
            placeholder="UserName"
            required="required"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required="required"
            onChange={handleInputChange}
          />
        </div>
        <div className="container">
          <button
            className="btn btn-primary btn-sm m-5"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>

          <button
            type="submit"
            className="btn btn-primary btn-sm "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
