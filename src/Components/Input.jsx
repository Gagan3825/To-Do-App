import React, { useState } from "react";
import "./Input.css";
import Taks from "./Taks";
function Input() {
  let [input, setinput] = useState("");
  const [note, setNote] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    setNote([...note, input]);
    setinput(" ");
    
  };

  const handledelete = (e) => {
    const newtodo = [...note];
    newtodo.splice(e, 1);
    setNote(newtodo);
  };
  return (
    <div className="card-container">
     <div className="card">
      <h1>To-do app</h1>
      <div className="inputfield">
        <form>
          <input
            type="text"
            placeholder="Add your stories"
            name={input}
            onChange={(e) => setinput(e.target.value)}
            className="input"
          />
          <button className="button-85" role="button" onClick={handlesubmit}>
            Add note
          </button>
        </form>
      </div>

      <div>
        {note.map((notes, index) => (
          <Taks
            key={index}
            text={notes}
            deletecompo={() => handledelete(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Input;
