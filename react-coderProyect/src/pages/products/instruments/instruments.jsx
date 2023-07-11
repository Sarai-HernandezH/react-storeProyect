import { useState } from 'react'
import Input from '../../../components/input/Input';
import InstrumentsCard from './InstrumentsCard';
import { useFetch } from '../../../hooks/useFetch';
import { API_URLS } from '../../../constants/api';
import Loader from '../../../components/loader/loader';
import { useNavigate } from 'react-router-dom';




function Instruments() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [instrumentDetail, setInstrumentDetail] = useState(null);
  const [instrumentFiltered, setInstrumentFiltered] = useState([]);



  const { data: instruments, loading, error} = useFetch(API_URLS.INSTRUMENTS.url, API_URLS.INSTRUMENTS.config);


  const filterBySearch = (query) => {
    let updateInstrumentList = [...instruments];
  
    updateInstrumentList = updateInstrumentList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
      
    setInstrumentFiltered(updateInstrumentList);
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
    const instrument = instruments.find((item) => item.id === id)
    navigate(`/instruments/${id}`)

    console.log(instrument);
  }
    
  return (
      <div>
        <div className='InstrumentContainer'>
            <div className='inputContainer'>
            <Input
                placeholder="Find an instrument"
                id = "Instruments"
                required={true}
                name = 'Search'
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                active={active}
            />
            </div>
                <h1 className='headerCardTitle'>Instruments</h1>
                <div className='instrumentCardContainer'>
                  {loading && <Loader />}
                  {error && <h1>{error}</h1>}
                  { search.length > 0 && instrumentFiltered.length === 0 && <h2>Instrument not found</h2>}
                  {
                    search.length > 0 ? (
                      instrumentFiltered.map((instrument) => (
                        <InstrumentsCard key={instrument.id} {...instrument} onShowDetails={onShowDetails} />
                    ))
                    ) : (
                      instruments.map((instrument) => (
                        <InstrumentsCard key={instrument.id} {...instrument} onShowDetails={onShowDetails} />
                      ))
                    )
                  }
                  
                
                </div>
        </div>
    </div>
  )
}



export default Instruments;
