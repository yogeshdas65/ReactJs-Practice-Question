import React, { useState } from "react";
const items = [
  { id: 1, name: "Apple", description: "A red fruit" },
  { id: 2, name: "Banana", description: "A yellow fruit" },
  { id: 3, name: "Cherry", description: "A small red fruit" },
  { id: 4, name: "Mango", description: "A tropical fruit" },
];

const Dropdown = () => {
  const [select, setSelect] = useState("");
  return (
    <>
      <div>Dropdown</div>
      <div>
        <select onChange={(e) => setSelect(e.target.value)}>
          {items.map((item, key) => (
            <option>{item.name}</option>
          ))}
        </select>
        <h3>{select}</h3>
      </div>
    </>
  );
};

export default Dropdown;
