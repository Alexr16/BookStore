import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Books />}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </>
);

export default App;
