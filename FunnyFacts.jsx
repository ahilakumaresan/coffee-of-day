import React from "react";
import coffeeFacts from "../data/coffeeFacts";

function FunnyFacts() {
  return (
    <div className="bg-light py-5" id="facts">
      <div className="container text-center">
        <h2>☕ Funny Coffee Facts</h2>
        <ul className="list-group mt-3">
          {coffeeFacts.map((fact, index) => (
            <li key={index} className="list-group-item">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FunnyFacts;