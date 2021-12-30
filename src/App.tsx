import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";

const items: string[] = ["Yes", "No", "Maybe"];

function App() {
  // keep track of chosen answer (or index of the chosen answer)
  const [answer, setAnswer] = useState<number | undefined>(undefined);

  // a function to submit answer
  const handleSubmit = () => {
    if (answer === undefined) {
      // abort submitting the form, if there is no valid answer
      return;
    }

    // just show an alert at this point
    const text = `Your answer is: ${items[answer]}`;
    alert(text);
  };

  // a function to register users answer on the poll
  const handleAnswer = (newAnswer: number) => {
    setAnswer(answer === newAnswer ? undefined : newAnswer);
  };

  return (
    <div className="app">
      <h1>A simple poll</h1>
      <div className="poll">
        {items.map((item, index) => {
          return (
            <div
              key={item}
              // add "selected" class if the item is the chosen answer
              className={`item ${index === answer ? "selected" : ""}`}
              onClick={() => handleAnswer(index)}
            >
              <div className="indicator">
                <span />
              </div>
              <div className="label">{item}</div>
            </div>
          );
        })}
      </div>
      <Button onClick={() => handleSubmit()} disabled={answer === undefined}>
        Submit answer
      </Button>
    </div>
  );
}

export default App;
