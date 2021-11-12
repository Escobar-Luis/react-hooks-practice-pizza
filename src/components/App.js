import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const[pizzas, setPizzas] =useState([])
  //we const a state for the users selected pizza from our pizza component so we can then sent that item down to our form!

  const[selectedPizza, setSelectedPizza] = useState(null)
  const [topping, setTopping] = useState('')
  const [size, setSize] = useState('small')
  const [vegetarian, setVegetarian] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r=>r.json())
    .then((pizzas) => setPizzas(pizzas))
  }, [])

  useEffect(() => {
    if (selectedPizza=== null) {
      return null
    }
    setSize(selectedPizza.size)
    setTopping(selectedPizza.topping)
    setVegetarian(selectedPizza.vegetarian.toString())
  }, [selectedPizza])

  function handleUpdatedPizza (updatedPizza) {
    const updatedPizzas = pizzas.map((pizza) => {
      if(pizza.id === updatedPizza.id) {
        return updatedPizza
      } else {
        return pizza
      }
    })
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm onUpdatedPizza={handleUpdatedPizza} vegetarian={vegetarian} setVegetarian={setVegetarian} selectedPizza={selectedPizza} size={size} topping={topping} setTopping={setTopping} setSize={setSize}/>
      <PizzaList  setSelectedPizza={setSelectedPizza} pizzas={pizzas}/>
    </>
  );
}

export default App;
