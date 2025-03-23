import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import AppNav from "./components/AppNav";
import "./index.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<TasksPage />}>
          {/* <Route path="/tasks" element={<TasksPage />}> */}
            <Route index element={<h1>tasks Analytics</h1>} />
            <Route path=":taskId" element={<h1>Task Details 1</h1>} />
            <Route path="create-task" element={<TaskForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
