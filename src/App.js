// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Landpage from './components/Auth/Landpage';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './components/Layout/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ChatBotExample from './components/ChatBot/ChatBotExample';
import ShowUsuario from './components/Formularios/ShowUsuario';
import ShowPersonal from './components/Formularios/ShowPersonal';

function App() {
  
  return (
    
    <AuthProvider>
      
      <Router>
      <ChatBotExample />
        <Navbar />
        <ConditionalContainer>
          <Routes>
          <Route path="/" element={<Landpage />}/>
            
            <Route path="/project" element={<Dashboard /> }/>
            <Route path="/education" element={<ShowUsuario /> }/>

            <Route path="/contact" element={<ShowPersonal/> }/>
            <Route path="/chatbotexample" element={<PrivateRoute><ChatBotExample /></PrivateRoute>}/>
            
          </Routes>
          </ConditionalContainer>
      </Router>
    </AuthProvider>
  );
}

function ConditionalContainer({ children }) {
  const location = useLocation();
  const noContainerRoutes = ['/', '/login', '/register'];

  const isNoContainer = noContainerRoutes.includes(location.pathname);

  return isNoContainer ? <>{children}</> : <div className="container mt-4">{children}</div>;
}
export default App;

