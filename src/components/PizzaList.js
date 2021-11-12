import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, setSelectedPizza}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map((p) => {
            return <Pizza setSelectedPizza={setSelectedPizza} key={p.id} p={p}/>
          })
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
