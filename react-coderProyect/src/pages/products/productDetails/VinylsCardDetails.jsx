import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './cardDetails.css';
import VinylsData from '../../../vinyls.json';
import Loader from '../../../components/loader/loader';




function VinylDetails () {
    const { vinylId } = useParams();
    const navigate = useNavigate();
    const [vinyl, setVinyl] = useState({ loading: false, error: false });


    
    useEffect(() => {
        const selectedVinyl = VinylsData.find((data) => data.id === parseInt(vinylId));
        setVinyl({ ...selectedVinyl, loading: true });

        setTimeout(() => {
            setVinyl({ ...selectedVinyl, loading: false });
        }, 1000);
        }, [vinylId]);

    if (!vinyl) {
        return null;
    }
    const history = window.history;

    const { id, name, category, price, img, stock, loading, error } = vinyl;

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
            <div className='cardVinylsDetails'>
                    <div className='cardDetail' key={id}>
                        <div className='cardDetailImageContainer'>
                            <img className='cardDetailImage' src={img} alt={name} />
                        </div>
                        <div className='cardDetailContent'>
                            <h3 className='cardDetailName'>{name}</h3>
                            <p className='cardDetailCategory'>{category}</p>
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

export default VinylDetails;