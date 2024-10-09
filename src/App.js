import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from './Pages/Start';
import About from './Pages/About';
import Product from './Pages/Product';
import Offert from './Pages/Offert';
import Footer from './Components/Footer/Footer';
import ProductCategory from './Pages/ProductCategory';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <Navbar/>
      <div className="content">
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/omoss' element={<About />}/>
        <Route path='/offert' element={<Offert/>}/>
        <Route path='/referenser' element={<ProductCategory category="ref"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
