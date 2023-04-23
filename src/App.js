import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import TerraformerDashboard from "./components/TerraformerDashboard";
import Dashboard from './components/Dashboard';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import AdminaccessRoute from './components/AdminaccessRoute';
import ProtectedRoute2 from './components/ProtectedRoute2'
function App() {
  return (
    <div>
      <Container fluid>
        <AuthContextProvider>

          <Routes>
            <Route path='/' element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
               <ProtectedRoute>

                 <Dashboard />
               </ProtectedRoute>
            } />
              <Route path='/admin'
                
                element={
                  <AdminaccessRoute>

                    <AdminDashboard 
                  />
                  </AdminaccessRoute>
                  } />
              <Route path="/terraformerdashboard"
                element={
                  <ProtectedRoute2>
                  <TerraformerDashboard/>
            </ProtectedRoute2>
                } />
            </Routes>
            
        </AuthContextProvider>
      </Container>
    </div>
  );
}

export default App;