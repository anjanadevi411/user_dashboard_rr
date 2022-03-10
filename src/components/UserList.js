import React from "react";
import { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [order, setOrder] = useState("ASC");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.reducerUsers.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleDelete = (id) => {
    console.log("id", id);
    if (window.confirm("Are you sure, do you want to delete?")) {
      dispatch(deleteUser(id));
      dispatch(getAllUsers());
    }
  };
  const sorting = (col) => {
    if (order === "ASC") {
      userData.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setOrder("DSC");
    }
    if (order === "DSC") {
      userData.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setOrder("ASC");
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          navigate("/adduser");
        }}
      >
        Add User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th
              onClick={() => {
                sorting("username");
              }}
              scope="col"
            >
              Username
            </th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((user) => {
              return (
                <tr key={user.id}>
                  {/* <th scope="row">{user.id}</th> */}
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username ? user.username : ""}</td>
                  <td>{user.email}</td>
                  <td>{user.address ? user.address["city"] : ""}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        navigate(`edituser/${user.id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
