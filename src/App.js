import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/edituser/:id" element={<EditUser />} />
    </Routes>
  );
}

export default App;
