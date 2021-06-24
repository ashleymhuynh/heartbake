import axios from "axios";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Snack from "./components/Snack";
import Form from "./components/Form";
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
      <h1>HeartBake</h1>
      <Navbar />
      <Route exact path="/">
        <main>
          {snacks.map((snack) => (
            <Snack
              key={snack.id}
              snack={snack}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form snacks={snacks} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
