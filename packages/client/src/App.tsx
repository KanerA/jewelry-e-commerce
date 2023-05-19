import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './routes';
// import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import useFetchProductsData from './hooks/useFetchProductsData';

function App() {
  const fetchDataFunc = useFetchProductsData();
  React.useEffect(() => {
    const a = async () => {
      fetchDataFunc()
    };
    a();
  })

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
