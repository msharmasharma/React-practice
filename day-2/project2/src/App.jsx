import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Add } from "./Components/Add";

function App() {
  const [count, setCount] = useState(0);
  const age = 25;
  const work = "masai";
  const tech = "MERN Stack";

  const number = [1, 2, 3, 4, 5, 6, 7, 8];
  const obj = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
  return (
    <div className="App">
      <Counter
        age={age}
        work={work}
        tech={tech}
        number={[number]}
        obj={[obj]}
        isMarried={age > 20 ? "valid" : "not valid"}
      />
      <Add />
    </div>
  );
}

export default App;
