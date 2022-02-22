import React from "react";
// presentational/functional component that has no Redux related code
const Todo = props => {
  return (
    <li>{props.text}</li>
  );
};

export default Todo;
