import React, { useState } from "react";

function PizzaForm({selectedPizza, setSize,setTopping, size, topping, setVegetarian, vegetarian, onUpdatedPizza}) {
  console.log(vegetarian)

  
  function handleSubmit (e) {
    e.preventDefault()
    const updatedPizza = {
      topping,
      size,
      vegetarian
    }
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    })
    .then(r=>r.json())
    .then((pizza) => {onUpdatedPizza(pizza)
    setVegetarian('')
  setTopping('')
setSize('small')})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select value={size} className="form-control" name="size"
          onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="true"
              value={vegetarian}
              checked={vegetarian === "true"}
              onChange={(e) => setVegetarian(e.target.name)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="false"
              value={vegetarian}
              checked={vegetarian === "false"}
              onChange={(e) => setVegetarian(e.target.name)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
