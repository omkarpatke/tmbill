import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
