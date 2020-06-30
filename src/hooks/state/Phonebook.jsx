import React, { useState } from "react";

const Phonebook = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const { firstName, lastName } = name;
  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="First name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="Last name"
      />
      <div>{JSON.stringify(name)}</div>
    </>
  );
};

export default Phonebook;
