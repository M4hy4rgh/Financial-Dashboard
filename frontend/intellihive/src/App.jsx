import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
    </div>
  );
}

export default App;
