import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState(13);
  const [pens, setPens] = useState(10);
  const [notebooks, setNotebooks] = useState(44);
  const [inkpens, setInkpens] = useState(78);

  const handleBooks = (value) => {
    setBooks(books + value);
  };

  const handlePens = (value) => {
    setPens(pens + value);
  };
  const handleNotebooks = (value) => {
    setNotebooks(notebooks + value);
  };
  const handleInkpens = (value) => {
    setInkpens(inkpens + value);
  };

  return (
    <div className="App">
      <div className="items">
        <span>Books:</span>
        <button className="addBook" onClick={() => handleBooks(1)}>
          +
        </button>
        <button className="remBook" onClick={() => handleBooks(-1)}>
          -
        </button>
        <span className="totalBooks">{books}</span>
      </div>
      <div className="items">
        <span>Pens:</span>
        <button className="addPen" onClick={() => handlePens(1)}>
          +
        </button>
        <button className="remPen" onClick={() => handlePens(-1)}>
          -
        </button>
        <span className="totalPens">{pens}</span>
      </div>
      <div className="items">
        <span>Notebooks:</span>
        <button className="addNotebook" onClick={() => handleNotebooks(1)}>
          +
        </button>
        <button className="remNotebook" onClick={() => handleNotebooks(-1)}>
          -
        </button>
        <span className="totalNotebooks">{notebooks}</span>
      </div>
      <div className="items">
        <span>Inkpens:</span>
        <button className="addInkpen" onClick={() => handleInkpens(1)}>
          +
        </button>
        <button className="remInkpen" onClick={() => handleInkpens(-1)}>
          -
        </button>
        <span className="totalInkpens">{inkpens}</span>
      </div>
      <div className="total">{books + pens + notebooks + inkpens}</div>
    </div>
  );
}

export default App;
