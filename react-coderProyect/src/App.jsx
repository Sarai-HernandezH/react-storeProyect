import './App.css'
import Header from './components/header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Products from './pages/products/Products';
import Vinyls from './pages/products/vinyls/vinyls';
import InstrumentDetails from './pages/products/productDetails/InstrumentCardDetails';
import VinylDetails from './pages/products/productDetails/VinylsCardDetails';
import { CartProvider } from './components/context/cart-context';
import Instruments from './pages/products/instruments/instruments';



function App() {

    
  return (
      <div>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/instruments/:instrumentSubCategory' element={<InstrumentDetails />} />
            <Route path='/products/:productId' element={<Products />} />
            <Route path='/instruments' element={<Instruments />} />
            <Route path='/vinyls' element={<Vinyls />} />
            <Route path='/vinyls/:vinylSubCategory' element={<VinylDetails />} />
          </Routes>
        </CartProvider>
    </div>
  )
}

export default App
