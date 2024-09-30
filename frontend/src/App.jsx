import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import ShowEmployee from "./pages/ShowEmployee";
import EditEmployee from "./pages/EditEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/employees/create" element={<CreateEmployee />} />
      <Route path="/employees/details/:id" element={<ShowEmployee />} />
      <Route path="/employees/edit/:id" element={<EditEmployee />} />
      <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
