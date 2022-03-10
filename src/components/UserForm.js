import React from "react";

function UserForm() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Name"
            required="required"
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required="required"
          />
        </div>
        <div className="container">
          <button type="submit" className="btn btn-primary btn-sm m-5">
            Cancel
          </button>

          <button type="submit" className="btn btn-primary btn-sm ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
