import Login from "./components/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
