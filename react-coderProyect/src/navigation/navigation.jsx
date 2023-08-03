import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/index';
import Products from '../pages/products/products';
import ProductDetail from '../pages/product-detail/productDetail';
import Cart from '../pages/cart/cart';
import Checkout from '../pages/checkout/checkout';
import SuccessOrder from '../pages/success-order/successOrder';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success-order' element={<SuccessOrder />} />
        </Routes>
    )
}

export default Router
