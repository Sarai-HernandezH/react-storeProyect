import { useState, useContext } from 'react'
import Input from '../../../components/input/Input';
import ProductCard from '../../../constants/ProductCard';
import { useFetch } from '../../../hooks/useFetch';
import { API_URLS } from '../../../constants/api';
import Loader from '../../../components/loader/loader';
import { useNavigate } from 'react-router-dom';
import Slider from '../../../components/slider/slider';
import { CartContext } from '../../../components/context/cart-context';






function Vinyls() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [vinylDetail, setVinylDetail] = useState(null);
    const [vinylFiltered, setVinylFiltered] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { setProducts, onAddToCart } = useContext(CartContext);



    const { data: vinyls, loading, error} = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);


    const filterBySearch = (query) => {
    let updateVinylList = [...vinyls];

    updateVinylList = updateVinylList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })

    setVinylFiltered(updateVinylList);
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
        setShowDetails(true);
        const vinyl = vinyls.find((item) => item.id === id)
        navigate(`/vinyls/${id}`)
        console.log(vinyl);
    }
    
    const onFilter = (category) => {
        setIsFiltered(true);
        let filteredVinyls = [];
        { category === 'All' ? filteredVinyls = vinyls : filteredVinyls = vinyls.filter((item) => item.category === category && item.subCategory === 'Vinyl')}

        setVinylFiltered(filteredVinyls);
        setSelectedCategory(category);
        console.log(filteredVinyls);
    }

    useEffect(() => {
        if(products?.length > 0) {
            setProducts(products);
        }
    }, [products, setProducts])

    const categories = [ ...new Set(vinyls.map((vinyl) => vinyl.category))];
    
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
                            <button key={category} onClick={() => onFilter(category)} type='button' className={`categoryContainer ${selectedCategory === category ? 'selected' : ''}`}>
                                <p className='categoryName'>{category}</p>
                            </button>
                        ))}
                    </Slider>
                </div>
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
            <div className='cardContainer'>
                {loading && <Loader />}
                {error && <h1>{error}</h1>}
                {
                isFiltered ? (
                    vinylFiltered.map((vinyl) => (
                        <ProductCard key={vinyl.id} {...vinyl} onShowDetails={onShowDetails} onAddToCart={onAddToCart} />
                    ))
                ) : (
                    vinyls.map((vinyl) => (
                        <ProductCard key={vinyl.id} {...vinyl} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
                ))
                )
            }
            {
                isFiltered && vinylFiltered.length === 0 && <h2>Vinyls not found</h2>
            }
        </div>
    </div>
</div>
)
}



export default Vinyls;
