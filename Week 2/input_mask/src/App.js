import React, { useEffect, useState } from "react";
import Input from "./Input";
import cities from "./cities.json";
import "./index.css";
function App() {
  const [hint, setHint] = useState("");
  const handleChange = (e) => {
    const bestMatch = cities.filter((item) => item.startsWith(e.target.value));
    if (e.target.value !== "" && bestMatch[0]) {
      return setHint(bestMatch[0]);
    }
    setHint("");
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default App;
