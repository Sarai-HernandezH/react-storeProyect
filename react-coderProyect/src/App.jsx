import './App.css'
import Header from './components/header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Instruments from './pages/products/instruments/instruments';
import Vinyls from './pages/products/vinyls/vinyls';
import InstrumentDetails from './pages/products/productDetails/InstrumentCardDetails';
import VinylDetails from './pages/products/productDetails/VinylsCardDetails';



function App() {

    
  return (
      <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instruments/:instrumentId' element={<InstrumentDetails />} />
        <Route path='/instrumentCards' element={<Instruments />} />
        <Route path='/vinyls' element={<Vinyls />} />
        <Route path='/vinyls/:vinylId' element={<VinylDetails />} />
      </Routes>
    </div>
  )
}

export default App
