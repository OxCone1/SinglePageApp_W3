import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Contacts from './pages/Contacts';
import Footer from './pages/Footer';
import Mission from './pages/Mission';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/mission" element={<Mission />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
