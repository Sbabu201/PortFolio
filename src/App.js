
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyCreativity from './pages/MyCreativity';
import HomePage from './pages/HomePage';
import { NavBar } from './Components';
import SingleCreationPage from './pages/SingleCreationPage';
import SpeechRecognitionComponent from './pages/Speech';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/mycreativity' element={<MyCreativity />} />
        <Route exact path='/creativepost/:id' element={<SingleCreationPage />} />
        <Route exact path='/speach' element={<SpeechRecognitionComponent />} />
      </Routes>
    </>
  );
}

export default App;
