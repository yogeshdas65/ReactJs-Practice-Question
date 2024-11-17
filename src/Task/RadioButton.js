import React, { useState } from "react";

const RadioButton = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <lable>
          <input
            type="radio"
            checked={value === "mail"}
            onClick={() => setValue("mail")}
          />
          Mail
        </lable>
        <label>
          <input
            type="radio"
            checked={value === "Femail"}
            onClick={() => setValue("Femail")}
          />
          Femail
        </label>
      </div>
    </>
  );
};

export default RadioButton;
