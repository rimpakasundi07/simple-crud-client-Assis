import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    // send data to the server
    fetch(``, {
      method: "PATCH",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json(updatedUser))
      .then((data) => {
        console.log("after update", data);
      });
  };

  return (
    <div>
      <h3>Edit a User</h3>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" defaultValue={user.name} />
        <br></br>
        <input type="email" name="email" id="" defaultValue={user.email} />
        <br></br>
        <input type="submit" value="Update user" />
      </form>
    </div>
  );
};

export default UpdateUser;
