import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={<Books />}
      />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
