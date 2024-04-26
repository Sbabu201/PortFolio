
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyCreativity from './pages/MyCreativity';
import HomePage from './pages/HomePage';
import { NavBar } from './Components';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/mycreativity' element={<MyCreativity />} />
      </Routes>
    </>
  );
}

export default App;
