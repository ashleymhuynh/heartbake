import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Snack(props) {
  const { name, description, rating } = props.snack.fields;

  const healedHeart = async () => {
    const snackURL = `${baseURL}/${props.snack.id}`;
    await axios.delete(snackURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{rating}</p>
      <button onClick={healedHeart}>Healed Heart❤️‍🩹</button>
      <Link to={`/edit/${props.snack.id}`}>
        <button>Edit Snack</button>
      </Link>
    </article>
  );
}
export default Snack;
