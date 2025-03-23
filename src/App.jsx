import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import AppNav from './components/AppNav';
function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
