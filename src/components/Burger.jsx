import React, { useState } from "react";
import "./BurgerStyle.css";

export default function Burger() {
  const [ingredient, setIngredient] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [price, setPrice] = useState(2);
  const addRemoveIngredient = (action, item, amount) => {
    let { lettuce, bacon, cheese, meat } = ingredient;

    let stateValue;
    switch (item) {
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      case "bacon": {
        stateValue = bacon;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        break;
      }
      case "meat": {
        stateValue = meat;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      stateValue = stateValue + 1;
      setPrice(price + amount);
    } else if (action === "remove" && price > 2) {
      stateValue = stateValue - 1;
      setPrice(price - amount);
    }
    setIngredient({ ...ingredient, [item]: stateValue >= 0 ? stateValue : 0 });
  };

  const burgerContent = () => {
    let { lettuce, bacon, cheese, meat } = ingredient;
    let burger = [];

    for (let i = 0; i < lettuce; i++) {
      burger.push(<div className="lettuseSide"></div>);
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(<div className="baconSide"></div>);
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div className="cheeseSide"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div className="meatSide"></div>);
    }
    if (burger.length === 0) burger.push(<p key="0">No Ingredients Added</p>);
    return burger;
  };

  return (
    <>
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
      <div className="ingredientsBlock " style={{ width: "100vw" }}>
        <div>
          Current Price : <strong>${price}</strong>
        </div>
        <div className="center-screen">
          <p>Lettuce</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => addRemoveIngredient("add", "lettuce", 4)}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              disabled={ingredient.lettuce === 0 ? true : false}
              onClick={() => addRemoveIngredient("remove", "lettuce", 4)}
            >
              Remove
            </button>
          </div>
          <p>BACON</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => addRemoveIngredient("add", "bacon", 6)}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              disabled={ingredient.bacon === 0 ? true : false}
              onClick={() => addRemoveIngredient("remove", "bacon", 6)}
            >
              Remove
            </button>
          </div>
          <p>CHEESE</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => addRemoveIngredient("add", "cheese", 8)}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              disabled={ingredient.cheese === 0 ? true : false}
              onClick={() => addRemoveIngredient("remove", "cheese", 8)}
            >
              Remove
            </button>
          </div>
          <p>MEAT</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => addRemoveIngredient("add", "meat", 10)}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              disabled={ingredient.meat === 0 ? true : false}
              onClick={() => addRemoveIngredient("remove", "meat", 10)}
            >
              Remove
            </button>
          </div>
          <button
            onClick={() => {
              alert(`Total Price = $${price} `);
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}
