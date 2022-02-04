import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/header'
import Card from "./components/card";

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    axios("https://netology-api-marvel.herokuapp.com/characters")
      .then(({ data }) => {
        return setState(data);
      })
      .catch((err) => err);
  }, []);


    console.log("рeroesMarvel :", state);

  return (
    <div className="">
      <Header />

      <div className="container">
        <h1 className="pt-3 pb-3">Персонажи Marvel</h1>
        <div className="row">
          {state.map((heroes) => {
            return <Card key={heroes.id} character={heroes} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
