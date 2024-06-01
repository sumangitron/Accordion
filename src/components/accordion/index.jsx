import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [selectedId, setSelectedId] = useState(null);

  const showAnsr = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="accordion-container">
      {data.map((item) => {
        return (
          <div key={item.id} className="item">
            <div className="question" onClick={() => showAnsr(item.id)}>
              <h3>{item.question}</h3>
              {item.id === selectedId ? <span>-</span> : <span>+</span>}
            </div>
            {item.id === selectedId ? (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
