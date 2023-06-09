import { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [statement, setStatement] = useState("");

  const calculateBMI = (height, weight) => {
    let bmi = weight / (height / 100) ** 2;
    bmi = bmi.toFixed(2);
    // let result = "";
    // if (bmi < 18.5) {
    //   result = "Underweight";
    // } else if (bmi >= 18.5 && bmi < 25) {
    //   result = "Normal weight";
    // } else if (bmi >= 25 && bmi < 30) {
    //   result = "Overweight";
    // } else if (bmi >= 30) {
    //   result = "Obesity";
    // }
    // const statement = `${bmi}. You are ${result}.`;
    setStatement(bmi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(height, weight);
  };

  return (
    <div className="container">
      <h1>Calculate BMI</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            name="height"
            type="text"
            className="form-control"
            placeholder="cm"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            name="weight"
            type="text"
            className="form-control"
            placeholder="kg"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100" type="submit">
          Calculate
        </button>
      </form>

      <p id="result">{statement}</p>
    </div>
  );
};

export default App;
