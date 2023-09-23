import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';

const App = () => {
  const user = useSelector(state => state.user.user);
  const { authUser } = user;
 
  return (
    <Router>
      <Routes>
        <Route path='/' element={authUser ? <Main /> : <Login />} />
        <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
        <Route path='/filteredProducts/:type/:id' element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
