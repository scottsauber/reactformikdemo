import React from "react";
import "./App.css";
import { Formik } from "formik";
import InputField from "./common/InputField";
import { validate } from "./registerValidator";
import Register from "./Register";

function App() {
  const [registerInput, setRegisterInput] = React.useState({});

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
