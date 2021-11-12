import React from "react";

function Pizza({p, setSelectedPizza}) {

  function handleClick () {
    setSelectedPizza(p)
  }
  return (
    <tr>
      <td>{p.topping}</td>
      <td>{p.size}</td>
      <td>{p.vegetarian.toString()}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
