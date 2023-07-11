import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './instrumentDetails.css';
import InstrumentsData from '../../../instruments.json';
import Loader from '../../../components/loader/loader';




function InstrumentDetails () {
    const { instrumentId } = useParams();
    const navigate = useNavigate();
    const [instrument, setInstrument] = useState({ loading: false, error: false });


    
    useEffect(() => {
        const selectedInstrument = InstrumentsData.find((data) => data.id === parseInt(instrumentId));
        setInstrument({ ...selectedInstrument, loading: true });

        setTimeout(() => {
            setInstrument({ ...selectedInstrument, loading: false });
        }, 1000);
        }, [instrumentId]);

    if (!instrument) {
        return null;
    }
    const history = window.history;

    const { id, name, description, price, img, stock, loading, error } = instrument;

    return (
            <>
            <div className='headerDetailContainer'>
                {history.length > 2 ? 
                (<button onClick={() => navigate(-1)}  className='backButton'>
                    &#8592; Back
                </button>) : null}
                <h2 className='headerTitleCard'>Product Detail</h2>
            </div>
            {loading && (
                <div className='loaderContainer'>
                    <Loader />
                </div>
            )}
            {error && <p>Something went wrong</p>}
            <div className='cardInstrumentsDetails'>
                    <div className='cardDetail' key={id}>
                        <div className='cardDetailImageContainer'>
                        <img className='cardDetailImage' src={img} alt={name} />
                        </div>
                        <div className='cardDetailContent'>
                            <h3 className='cardDetailName'>{name}</h3>
                            <p className='cardDetailDescription'>{description}</p>
                            <p className='cardDetailPrice'>USD {price}</p>
                            <p className='cardDetailStock'>{stock} left</p>
                            <div className='cardDetailActions'>
                                <button className='cardButton'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
                
}

export default InstrumentDetails;