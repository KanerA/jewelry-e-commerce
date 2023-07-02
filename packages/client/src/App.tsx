import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import "./styles/App.css"

import routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Policies from './components/ReturnPolicy';
import useFetchCartId from './hooks/useFetchCartId';
import useFetchCartData from './hooks/useFetchCartData';
import { getReturnPolicyState } from './store/selectors';
import useFetchProductsData from './hooks/useFetchProductsData';

function App() {
  const fetchDataFunc = useFetchProductsData();
  const fetchCartFunc = useFetchCartData();
  const fetchCartId = useFetchCartId();

  const showReturnPolicy = useSelector(getReturnPolicyState);

  React.useEffect(() => {
    const a = async () => {
      await fetchDataFunc();
      await fetchCartFunc();
      await fetchCartId();
    };
    a();
  }, [fetchDataFunc, fetchCartFunc, fetchCartId]);

  return (
    <div className="App">
      <Navbar />
      {showReturnPolicy && <Policies />}
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
