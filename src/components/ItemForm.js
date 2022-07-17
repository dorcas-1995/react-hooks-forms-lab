import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const newItem = {
    id: uuid(), ...props.formData
    }

  return (
    <form className="NewItem" onSubmit={event => props.onItemFormSubmit(event, newItem)}>
      <label>
        Name:
        <input type="text" name="name" onChange={event => props.onValueChange(event)} value={props.formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={event => props.onValueChange(event)} value={props.formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;