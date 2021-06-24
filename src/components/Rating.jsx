function Rating(props) {
  let brokenHearts = "";
  for (let i = 0; i < props.rating; i += 1) {
    brokenHearts += "💔";
  }
  return <p>{brokenHearts}</p>;
}
export default Rating;
