import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Signup from './component/Signup';
import Signin from './component/Singin';
import Header from './component/Header';
import NotFound from './component/NotFound';
import Profile from './component/Profile';

// Check authenticated
// const isAuthenticated = () => {
//   return localStorage.getItem('authToken') !== null;
// };

// PrivateRoute component 
// const PrivateRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to="/signin" />;
// };

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<h1>Welcome! Please choose a form.</h1>} />
        {/* <Route path="/profils" element={<PrivateRoute element={<Profiles />} />} /> */}
        <Route path="*" element={<NotFound />} /> 
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
