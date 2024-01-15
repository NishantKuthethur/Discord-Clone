import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import LoginPage from "./Pages/authPages/Login/LoginPage"
import RegisterPage from "./Pages/authPages/Register/RegisterPage"
import Dashboard from "./Pages/Dashboard/Dashboard"

import "./App.css"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
