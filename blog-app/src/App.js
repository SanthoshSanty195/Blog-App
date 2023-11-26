import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';;
import BlogManager from './Components/BlogManager';
import Home from './Components/Home';
import Login from './Components/Login'; 
import Register from './Components/Register';
import { useState } from 'react';


function App() {
  const [registeredData, setRegisteredData] = useState([])


  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogManager />} />
        <Route path="/login" element={<Login registeredData={registeredData} />} />
        <Route path="/register" element={<Register registeredData={registeredData} setRegisteredData={setRegisteredData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
