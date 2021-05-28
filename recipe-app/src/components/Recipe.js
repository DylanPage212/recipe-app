import React from "react";
import style from "../recipe.module.css";

const Recipe = (props) => {
    const {title, calories, image, ingredients} = props;
return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
            ))}
        </ol>
        <p>{Math.round(calories)} Total Calories</p>
        <img className={style.image} src ={image} alt=""></img>
    </div>
);

}

export default Recipe;