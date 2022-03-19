import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const age = 25;
  const name = "Madhusudan Sharma";
  const marks = [1, 2, 3, 4];

  const Users = [
    { name: "john cena", work: "wwe/movies" },
    { name: "rock", work: "wwe/movies" },
    { name: "hhh", work: "wwe/movies" },
    { name: "punk", work: "wwe/movies" },
  ];

  const brands = [
    { heading: "Mobile Operating System", content: "Android" },
    { content: "Blackberry" },
    { content: "Iphone" },
    { content: "Windows Phone" },
    { heading: "Mobile Manufacturers", content: "Samsung" },
    { content: "HTC" },
    { content: "Micromax" },
    { content: "Apple" },
  ];

  return (
    <div className="App">
      <div>
        Age is :- {age} <br /> Name is :-{" "}
        {age > 24 ? `${name}` : `age is less than 25`} <br /> Marks is :-{" "}
        {marks.map((el) => {
          return <li>{el}</li>;
        })}
      </div>
      <div>
        <li>{xyz()}</li>
      </div>
      <div>
        {Users.map((sup) => {
          return wwe(sup);
        })}
      </div>
      <div>
        {brands.map((b) => {
          return <BrandName heading={b.heading} content={b.content} />;
        })}
      </div>
    </div>
  );
}

function xyz() {
  let arr1 = [
    {
      name: "Madhusdan Sharma",
      age: 25,
      education: "Mern Stack ",
    },
  ];
  return arr1.map((el) => {
    return el.name + "  " + el.age + "  " + el.education;
  });
}

function wwe({ name, work }) {
  return (
    <div>
//       <h1>Name is :- {name}</h1>
//       <p>Work is :- {work}</p>
//     </div>
  );
}

function BrandName({ heading, content }) {
  return (
    <div>
      <h1>{heading}</h1>
      <li>{content}</li>
    </div>
  );
}


export default App;
