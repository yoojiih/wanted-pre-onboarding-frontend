import React from "react";
import './App.css';
// import { Home, SignUp, SignIn, Todo } from "./view";
import Home from "./view/pages/Home";
import SignIn from "./view/pages/SignIn";
import SignUp from "./view/pages/SignUp";
import Todo from "./view/pages/Todo";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route caseSensitive path="/signin" element={<SignIn />} />
        <Route caseSensitive path="/signup" element={<SignUp />} />
        <Route caseSensitive path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}
export default App;

