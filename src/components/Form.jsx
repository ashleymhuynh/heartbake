import { useState } from "react";
function Form(props) {
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" />
      <label htmlFor="description">Description: </label>
      <textarea id="description"></textarea>
      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" />
      <button type="submit"></button>
    </form>
  );
}
export default Form;
