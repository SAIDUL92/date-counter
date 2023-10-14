import { useState } from "react";


export default function App() {
    return <div>
        <DateCounter />

    </div>
}


function DateCounter() {


    const [counter, setCounter] = useState(1);
    const [step, setStep] = useState(0);

    function handleConterIncreament() {
        setCounter((count) => count + 1)

    }
    function handleConterDecreament() {
        setCounter((count) => count - 1)

    }


    const date = new Date();
    date.setDate(date.getDate() + counter);
    return (
        <div>
            <div>
                <button onClick={handleConterDecreament}>-</button>
                <span>Step:{counter}</span>
                <button onClick={handleConterIncreament}>+</button>
            </div>

            <div>
                <button onClick={() => {
                    setStep((stepCount) => stepCount - counter)
                }}>-</button>
                <span>Count: {step}</span>
                <button onClick={() => setStep((stepCount) => stepCount + counter)}>+</button>
            </div>

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




