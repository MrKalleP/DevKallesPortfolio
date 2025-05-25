import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { FirstPage } from './pages/FirstPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Home" element={<FirstPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
