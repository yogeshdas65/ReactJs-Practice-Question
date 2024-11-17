import React, { useState } from "react";
const Payment = ["Credit Card", "PayPal", "BankTransfer"];
const RadioButton2 = () => {
  const [select, setSelect] = useState("");

  return (
    <>
      <div>RadioButton2</div>
      <div>
        {Payment.map((item, key) => (
          <lable>
            <input
              type="radio"
              checked={select === item}
              onClick={(e) => setSelect(item)}
            />
            {item}
          </lable>
        ))}
        <h3>Selected:-{select}</h3>
      </div>
      {/* <div>
        <select onChange={(e)=> setSelect(e.target.value)}>
          {Payment.map((item, key) => (
            <option>{item}</option>
          ))}
        </select>
        <h1>{select}</h1>
      </div> */}
    </>
  );
};

export default RadioButton2;
