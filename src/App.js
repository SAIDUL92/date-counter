import { useState } from "react";

export default function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [counter, setCounter] = useState(1);
  const [step, setStep] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + step);
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          type="range"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />

        <span>Step:{counter}</span>
      </div>

      <div>
        <button
          onClick={() => {
            setStep((stepCount) => stepCount - counter);
          }}
        >
          -
        </button>
        <input
          type="text"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={() => setStep((stepCount) => stepCount + counter)}>
          +
        </button>
      </div>

      {counter > 1 || step > 0 ? (
        <button
          style={{ marginTop: "5px" }}
          onClick={() => {
            setCounter(1);
            setStep(0);
          }}
        >
          Reset
        </button>
      ) : null}
      <p>
        <span>
          {step === 0
            ? "Today is "
            : step > 0
            ? `${step} days from today is `
            : `${Math.abs(step)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
