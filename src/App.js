import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
