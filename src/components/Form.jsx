import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSnack = {
      name,
      description,
      rating,
    };
    await axios.post(baseURL, { fields: newSnack }, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
        required
      />
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <label htmlFor="rating">Rating:</label>
      <input
        type="range"
        id="rating"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
        required
      />
      <button type="submit">💔🍞</button>
    </form>
  );
}
export default Form;
