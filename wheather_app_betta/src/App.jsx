import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchSection from './components/SearchSection';
import Home from './components/Home';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/search" element={<SearchSection />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/" element={<CityDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
