import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Budget from "./pages/Budget";
import BudgetAdd from "./pages/BudgetAdd";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Users = () => <h1>Users</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="budget" element={<Budget />} />
          <Route path="budget/add" element={<BudgetAdd />}></Route>
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
