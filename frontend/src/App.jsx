import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// Missing imports for Profile, SignIn, and SignOut components
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;




