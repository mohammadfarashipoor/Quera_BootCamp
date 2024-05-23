import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Animals from "./Animals";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/animals/:id" element={<Details />} />
          <Route path="/" element={<Animals />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
