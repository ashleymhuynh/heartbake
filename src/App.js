import axios from "axios";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Snack from "./components/Snack";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [snacks, setSnacks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  useEffect(() => {
    const fetchSnack = async () => {
      const resp = await axios.get(baseURL, config);
      setSnacks(resp.data.records);
    };
    fetchSnack();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <main>
          {snacks.map((snack) => (
            <Snack snack={snack} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <h2>Bake My Heart </h2>
      </Route>
      <Route path="/edit/:id">
        <h2>Edit Snack</h2>
      </Route>
    </div>
  );
}

export default App;
