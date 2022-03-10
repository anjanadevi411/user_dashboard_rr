import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleUser, getSingleUser } from "../redux/action";

function EditUser() {
  const dispatch = useDispatch();
  const oneUser = useSelector((state) => state.reducerUsers.user);
  console.log("oneUser", oneUser);

  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = state;

  const [error, setError] = useState("");
  let { id } = useParams();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (oneUser) {
      setState({ ...state });
    }
  }, [oneUser]);

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
      dispatch(updateSingleUser(state, id));
      navigate("/");
      setError("");
    }
  };
  return (
    <div className="container">
      <h3>Edit USER</h3>
      {error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            value={name || ""}
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
            value={username || ""}
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
            value={email || ""}
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
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
