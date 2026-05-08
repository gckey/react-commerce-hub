import { Routes, Route } from 'react-router';
import './App.css'
import HomePage from './components/HomePage';
import CheckoutPage from './components/CheckoutPage';
import OrdersPage from './components/OrdersPage';
import TrackingPage from './components/TrackingPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>
  
  );
  
};

export default App;
