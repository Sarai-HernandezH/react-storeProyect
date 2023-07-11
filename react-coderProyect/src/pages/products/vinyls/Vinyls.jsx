import { useState } from 'react'
import Input from '../../../components/input/Input';
import VinylsCard from './VinylsCards';
import { useFetch } from '../../../hooks/useFetch';
import { API_URLS } from '../../../constants/api';
import Loader from '../../../components/loader/loader';
import { useNavigate } from 'react-router-dom';





function Vinyls() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [vinylDetail, setVinylDetail] = useState(null);
    const [vinylFiltered, setVinylFiltered] = useState([]);



    const { data: vinyls, loading, error} = useFetch(API_URLS.VINYLS.url, API_URLS.VINYLS.config);


    const filterBySearch = (query) => {
    let updateVinylList = [...vinyls];

    updateVinylList = updateVinylList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })

    setVinylFiltered(updateVinylList);
    }

    const onChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        filterBySearch(value);
    }

    const onFocus = () => {
        setActive(true);
    }

    const onBlur = () => {
        setActive(false);
    }

    const onShowDetails = (id) => {
        setShowDetails(true);
        const vinyl = vinyls.find((item) => item.id === id)
        navigate(`/vinyls/${id}`)
    
        console.log(vinyl);
    }
    
    return (
    <div>
        <div className='VinylContainer'>
            <div className='inputContainer'>
            <Input
                placeholder="Find a Vinyl"
                id = "Vinyls"
                required={true}
                name = 'Search'
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                active={active}
            />
            </div>
                <h1 className='headerCardTitle'>Vinyls</h1>
                <div className='vinylCardContainer'>
                    {loading && <Loader />}
                    {error && <h1>Error occurred while fetching data.</h1>}

                    {search.length > 0 && vinylFiltered.length === 0 && <h2>Vinyl not available</h2>}
                    {
                    search.length > 0 ? (
                        vinylFiltered.map((vinyl) => (
                        <VinylsCard key={vinyl.id} {...vinyl} onShowDetails={onShowDetails} />
                    ))
                    ) : (
                        vinyls.map((vinyl) => (
                        <VinylsCard key={vinyl.id} {...vinyl} onShowDetails={onShowDetails} />
                    ))
                    )
                    }
                </div>
        </div>
    </div>
)
}



export default Vinyls;
