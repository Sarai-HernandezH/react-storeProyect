import { useLocation } from 'react-router-dom';
import './successOrder.css'


const SuccessOrder = () => {
    const location = useLocation();

    const { orderId } = location.state || { orderId: null}
    return (
        <div>
            <h2 className='success'>Success Order</h2>
            <p className='orderId'>Order Id: {orderId}</p>
        </div>
    )
}

export default SuccessOrder;