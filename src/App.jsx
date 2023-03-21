import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <div className="App bg-gray-900 text-white flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
