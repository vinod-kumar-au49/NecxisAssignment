import react from 'react';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Allposts from './components/userallpost';
import Allreviwes from './components/reviwe';
import UserPost from './components/userpost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
      <Header/>
      <Home/>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/users" exact element={<Allposts />} />
      <Route path="/users" exact element={<UserPost />} />
      <Route path="/reviwes" exact element={<Allreviwes />} />

      </Routes>

      <Footer/>
    
    </div>
    
  );
}

export default App;
