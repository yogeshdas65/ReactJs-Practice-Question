import React, { useState } from 'react'
const accordionItems = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What is JSX?",
    content:
      "JSX is a syntax extension that looks similar to HTML and can be used in React.",
  },
  {
    id: 3,
    title: "What is a Component?",
    content: "A component is a reusable piece of UI in a React application.",
  },
];

const AccordionItems = () => {
  const [select, setSelect] = useState("")
  console.log(select)

  return (
    <>
      <div>AccordionItems</div>
      <div>
        {accordionItems.map((item, key) => (
          <div>
            <h1 onClick={()=>setSelect(item.id)}>{item.title}</h1>
            {select === item.id && <h3>{item.content}</h3>} 
          </div>
        ))}
      </div>
    </>
  )
}

export default AccordionItems