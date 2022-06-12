import "./App.css";
import Header from "./components/Header";
import Recepies from "./components/Recepies";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [search, setSearch] = useState("search");
  const [recipes, SetRecipes] = useState([]);
  const [count, setCount] = useState(0);
  handleData = () => {
    setCount(count + 1);
    console.log(count);
  };

  const APP_ID = "a9e97685";
  const APP_KEY = "9709c0401aa79a15eb622257a4358c0b";
  useEffect(() => {
    fetchData();
  }, [recipes]);

  const fetchData = async () => {
    const res = await axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .catch((data) => {
        console.log(data, "error");
      });
    SetRecipes(res.data.hits);
    console.log(res.data.hits);
  };

  const onInputHandle = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const onSearchHandle = () => {
    fetchData();
  };

  return (
    <div className="App container">
      <Header
        search={search}
        onInputHandle={onInputHandle}
        onSearchHandle={onSearchHandle}
      />

      {/* {recipes &&
        recipes.length > 0 &&
        recipes.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.recipe.calories}</h3>
              <h3>{item.recipe.label}</h3>
            </div>
          );
        })} */}
      <Recepies recipes={recipes} />
    </div>
  );
}

export default App;
