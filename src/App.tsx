import { useState } from "react";
import "./App.css";
import ExpenceTracker from "./components/ExpenceTracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex-col flex justify-center items-center w-full pt-20">
        <ExpenceTracker />
      </div>
    </>
  );
}

export default App;
