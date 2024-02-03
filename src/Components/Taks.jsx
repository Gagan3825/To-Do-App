import React,{useState} from "react";
import "./Task.css";

function Taks({ text,deletecompo }) {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="task-container">
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
       <p className={`task-text ${isChecked ? "completed" : ""}`}>{text}</p>
      <button className="button-17" role="button" onClick={deletecompo}>
        Delete
      </button>
    </div>
  );
}

export default Taks;
