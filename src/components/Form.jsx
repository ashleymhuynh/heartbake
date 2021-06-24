import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    //if there's an id in the url AND snacks is longer than 0
    if (params.id && props.snacks.length > 0) {
      //find the snack where its id matches the id from params and save it in a variable called snackToEdit
      const snackToEdit = props.snacks.find((snack) => snack.id === params.id);
      //if the snack we were looking for exists
      if (snackToEdit) {
        //populate the states(???)
        setName(snackToEdit.fields.name);
        setDescription(snackToEdit.fields.description);
        setRating(snackToEdit.fields.rating);
      }
    }
  }, [params.id, props.snacks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSnack = {
      name,
      description,
      rating,
    };
    if (params.id) {
      const snackURL = `${baseURL}/${params.id}`;
      await axios.put(snackURL, { fields: newSnack }, config);
    } else {
      await axios.post(baseURL, { fields: newSnack }, config);
      props.setToggleFetch((curr) => !curr);
    }
    setTimeout(() => {
      history.push("/");
    }, 1000);
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
