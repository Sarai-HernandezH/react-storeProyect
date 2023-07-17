
import { useEffect, useState, useContext } from 'react';
import Input from '../../../components/input/Input';
import ProductCard from '../../../constants/ProductCard';
import { useFetch } from '../../../hooks/useFetch';
import { API_URLS } from '../../../constants/api';
import Loader from '../../../components/loader/loader';
import { useNavigate } from 'react-router-dom';
import Slider from '../../../components/slider/slider';
import { CartContext } from '../../../components/context/cart-context';





function Instruments() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [instrumentFiltered, setInstrumentFiltered] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [selectedSubCategory, setSelectedSubCategory] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState([]);

    const { setProducts, onAddToCart } = useContext(CartContext);

    const { data: instruments, loading, error} = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);


    const filterBySearch = (query) => {
        let updateInstrumentList = [...instruments];

        updateInstrumentList = updateInstrumentList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    
    setInstrumentFiltered(updateInstrumentList);
    setIsFiltered(true);
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
        const instrument = instruments.find((item) => item.id === id)
        navigate(`/instruments/${id}`)
        console.log(instrument);
    }

    const onFilter = (subCategory) => {
        setIsFiltered(true);
        let filteredInstruments = [];
        {subCategory === 'All' ? filteredInstruments = instruments : filteredInstruments = instruments.filter((item) => item.subCategory === subCategory);}

        setInstrumentFiltered(filteredInstruments);
        setSelectedSubCategory(subCategory);
        console.log(filteredInstruments);
    }

    useEffect(() => {
        if(instruments?.length > 0) {
            setProducts(instruments);
        }
    }, [instruments, setProducts])

    const categories = [...new Set(instruments.map((instrument) => instrument.category))];
    setSelectedCategory(categories);


    

    
    return (
        <div>
            <div className='productContainer'>
                <div className='categoriesContainer'>
                    {loading && <Loader />}
                    {error && <h1>{error}</h1>}
                    <Slider>
                        < button onClick={() => setIsFiltered(false)} type='button' className='categoryContainer'>
                            <p className='categoryName'>All</p>
                        </button>
                        {categories.map((category) => (
                            <button key={category} onClick={() => onFilter(category)} type='button' className={`categoryContainer ${selectedSubCategory === category ? 'selected' : ''}`}>
                                <p className='categoryName'>{category}</p>
                            </button>
                        ))}
                    </Slider>
                </div>
                <div className='inputContainer'>
                    <Input
                        placeholder="Find an instrument"
                        id = "Instrument"
                        required={true}
                        name = 'Search'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        active={active}
                    />
                </div>
                <h1 className='headerCardTitle'>Instruments</h1>
                <div className='cardContainer'>
                    {loading && <Loader />}
                    {error && <h1>{error}</h1>}
                    {selectedSubCategory === 'All' ? (
  selectedCategory.map((category) => (
    <button key={category} onClick={() => onFilter(category)} type='button' className={`categoryContainer ${selectedSubCategoryCategories.includes(category) ? 'selected' : ''}`}>
      <p className='categoryName'>{category}</p>
    </button>
  ))
) : (
  instrumentFiltered.map((instrument) => (
    <ProductCard key={instrument.id} {...instrument} onShowDetails={onShowDetails} onAddToCart={onAddToCart} />
  ))
)}

                {
                    isFiltered && instrumentFiltered.length === 0 && <h2>Instrument not found</h2>
                }
            </div>
        </div>
    </div>
    )
}



export default Instruments;
