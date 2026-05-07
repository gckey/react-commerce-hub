import { Routes, Route } from 'react-router';
import './App.css'
import HomePage from './components/HomePage';
import CheckoutPage from './components/CheckoutPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  
  );
  
};

export default App;
