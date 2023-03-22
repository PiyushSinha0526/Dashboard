import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="App bg-gray-900 text-white flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <div className="pl-20 md:pl-0">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
