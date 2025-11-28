import { useState } from "react";
import MainScreen from "./mainScreen/MainScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCompanionMain from "./CreateCompanion/CreateCompanionMain";

function App() {
  const [count, setCount] = useState(0);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen/>} />

        <Route path="/Create-Companion" element={<CreateCompanionMain/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
