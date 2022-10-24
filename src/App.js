import React from 'react';
// import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
// import { Health } from './pages/Health/Health';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Health />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
