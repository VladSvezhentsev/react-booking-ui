import { Routes, Route } from "react-router-dom";
import {
   Home,
   Hotel,
   List,
   Login,
   Register,
   ListCity,
   ListType,
} from "./pages";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/hotels" element={<List />} />
         <Route path="/hotels/type" element={<ListType />} />
         <Route path="/hotels/city" element={<ListCity />} />
         <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
   );
}

export default App;
