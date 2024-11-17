import React, { useState } from 'react'
const initialProducts = [
    { id: 1, name: "Laptop", category: "Electronics", price: 800 },
    { id: 2, name: "Headphones", category: "Electronics", price: 150 },
    { id: 3, name: "Shoes", category: "Clothing", price: 60 },
    { id: 4, name: "Jacket", category: "Clothing", price: 120 },
    { id: 5, name: "Blender", category: "Home Appliances", price: 90 },
];
const ProductSearchFilter = () => {
    const [search, setSearch] = useState("")
    const [Found , SetFound] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        let found =  initialProducts.find((item)=>item.name === search)
        console.log(found)
        SetFound(found)
    }
    
  return (
      <>
          <div>
              <lable>
                  <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  <button onClick={handleSearch}> Search</button>      
              </lable>
          </div>
           <div>
              {Found.name}
              {Found.category}
              {Found.price}
          </div> 
      </>
  )
}

export default ProductSearchFilter