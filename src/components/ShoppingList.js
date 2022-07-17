import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchItems] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearchItems(event.target.value)
  }

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    setFormData({...formData, [name]:value})
  }

  function handleFormSubmit(event, newItem){
    event.preventDefault()
    console.log(newItem)
    addNewItem(newItem)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    if (search === "") return true

    return item.name.includes(search)
  })

  return (
    <div className="ShoppingList">
      <ItemForm onValueChange={handleChange} formData={formData} onItemFormSubmit={handleFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;