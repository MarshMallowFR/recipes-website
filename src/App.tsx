import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './views/Menu';
import IngredientList from './views/IngredientList';
import Stores from './views/Stores';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/ingredients" element={<IngredientList />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
