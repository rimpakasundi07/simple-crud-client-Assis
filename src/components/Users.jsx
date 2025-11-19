import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };
    // save this user data to the database (via server)

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);

          alert("users added successfully");
          e.target.reset();
        }
      });
  };

  const handleDelete = (id) => {
    console.log("Delete a User", id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete", data);
        if (data.deletedCount) {
          alert("deleted successfully");
          const reamining = users.filter((user) => user._id !== id);
          setUsers(reamining);
        }
      });
  };

  return (
    <div>
      <h2> Users: {users.length} </h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br></br>
        <input type="email" name="email" id="" />
        <br></br>
        <input type="submit" value="Add User" />
      </form>
      <p>----------------------------------------------</p>
      <div className="">
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
