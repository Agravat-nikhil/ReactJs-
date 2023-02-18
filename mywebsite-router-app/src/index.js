import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Review from './pages/Review';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import NoPage from './pages/404.js';
import './style.css';


export default function App()
{
	return (

		<BrowserRouter>
		<Routes>

		<Route path="/" element={<Layout />} >
		<Route index element={<Home />} />

		<Route path="feedback" element={<Feedback />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<NoPage />} />

		</Route>
		</Routes>
		</BrowserRouter>


	);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
