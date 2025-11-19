import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h3>Edit a User</h3>
    </div>
  );
};

export default UpdateUser;
