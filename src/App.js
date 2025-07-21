import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import WebDevelopment from './pages/courses/WebDevelopment';
import DataScience from './pages/courses/DataScience';
import UIUXDesign from './pages/courses/UIUXDesign';
import AppDevelopment from './pages/courses/AppDevelopment';
import Programs from './pages/Programs';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/web-development" element={<WebDevelopment />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/courses/app-development" element={<AppDevelopment />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;