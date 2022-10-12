import { Routes, Route } from "react-router-dom";
import { Home, Hotel, List } from "./pages";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/hotels" element={<List />} />
         <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
   );
}

export default App;
