import React from "react";
import useInput from "./useInput";

const UserFormWithCustomHook = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
    });

    alert(`Hello, ${firstName} ${lastName}!`);

    resetFirstName();
    resetLastName();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserFormWithCustomHook;
