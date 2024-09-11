import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './Pages/Menu/Menu';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
