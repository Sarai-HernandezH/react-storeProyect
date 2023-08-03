import './App.css';
import Header from './components/header/navbar';
import { CartProvider } from './context/cart-context';
import Router from './navigation/navigation';

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Router />
      </CartProvider>
    </div>
  )
}

export default App;
