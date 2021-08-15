import React from "react"
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Components/Header"
import Cart from "./Pages/Cart"
import Photos from "./Pages/Photos";

function App() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <Switch>
         <Route exact path="/">
           <Photos />
         </Route>
         <Route path="/cart">
           <Cart />
         </Route>
      </Switch>
    </div>
  );
}

export default App;
