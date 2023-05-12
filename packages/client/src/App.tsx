import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './routes';
// import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={`page-${index}`} path={route.path} Component={route.main} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
