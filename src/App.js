import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Blog from './pages/Blog';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
