import React, { useState } from 'react';
import './pages/homepage/homepage.css';

import { BrowserRouter, Route, Routes, Link,  } from 'react-router-dom';
import {Signup} from './components/Signup2'
import {Login} from './components/Login'
import HomePage from './pages/homepage/HomePage'
import Dashboard from './pages/dashboard/dashboard'


function App() {
    const [showAbout, setShowAbout] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    // const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

    const toggle = (section) => {
        if (section === 'about') {
            setShowAbout(!showAbout);
        } else if (section === 'login') {
            setShowLogin(!showLogin);
        }
    };

    return (
        <div>

            {/* Define your Routes here */}
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
            </BrowserRouter>
           
        </div>
    );
}



export default App;
