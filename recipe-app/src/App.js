import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Recipe from "./components/Recipe";

function App() {

  const APP_ID = "f3de6595";
  const APP_KEY = "c1a279f36faac6d4cb6af26b8a11ea66";
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const searchHandler = e => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  useEffect(() => {
     axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res => {
      console.log(res.data);
      setRecipes(res.data.hits);
      console.log("recipes", recipes)
    })
    .catch(err => {
      console.log(err);
    })
  }, [query])

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input 
        className="search-bar"
        type="text"
        value={search}
        onChange={searchHandler}
        />
        <button 
        className="search-button" 
        type="submit">
          Search
          </button>
      </form>
  <div>
      {recipes.map((recipe, index) => {
        return <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} key={index}/>
      })}
  </div>
    </div>
  );
}

export default App;
