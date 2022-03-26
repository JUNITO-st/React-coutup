import { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("App");
  const [count, setCouunt] = useState(0);
  const onClickCountUp = () => {
    setCouunt(count + 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウント</button>
    </div>
  );
}
