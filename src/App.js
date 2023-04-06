import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) => {
      setNameList(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1>Api Fetching</h1>
    </div>
  );
}

export default App;
