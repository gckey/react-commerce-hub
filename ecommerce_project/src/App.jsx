import { Routes, Route } from 'react-router';
import './App.css'
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  
  );
  
};

export default App;
