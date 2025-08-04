import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import ExpenceTracker from "./components/ExpenceTracker";
import { MyCom } from "./components/MyCom";

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
