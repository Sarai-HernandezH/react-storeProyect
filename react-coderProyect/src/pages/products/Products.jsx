import { useEffect, useState, useContext } from 'react';
import Input from '../../components/input/Input';
import ProductCard from '../../constants/ProductCard';
import { useFetch } from '../../hooks/useFetch';
import { API_URLS } from '../../constants/api';
import Loader from '../../components/loader/loader';
import { useNavigate } from 'react-router-dom';
import Slider from '../../components/slider/slider';
import { CartContext } from '../../components/context/cart-context';





function Products() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [productFiltered, setProductFiltered] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  
  const { setProducts, onAddToCart } = useContext(CartContext);

  const { data: products, loading, error} = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);


  const filterBySearch = (query) => {
    let updateProductList = [...products];
  
    updateProductList = updateProductList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
      
    setProductFiltered(updateProductList);
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
    const product = products.find((item) => item.id === id)
    navigate(`/products/${id}`)
    console.log(product);
  }

  const onFilter = (subCategory) => {
    setIsFiltered(true);
    let filteredProducts = [];
    if (subCategory === 'All') {
      filteredInstruments = instruments;
    } else {
      filteredProducts = instruments.filter((item) => item.subCategory === subCategory);
    }
    setProductFiltered(filteredProducts);
    setSelectedSubCategory(subCategory);
    console.log(filteredProducts);
  }
  
  useEffect(() => {
    if(products?.length > 0) {
        setProducts(products);
    }
  }, [products, setProducts])

  const categories = [ ...new Set(products.map((product) => product.subCategory))];

    
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
              {categories.map((subCategory) => (
                <button key={subCategory} onClick={() => onFilter(subCategory)} type='button' className={`categoryContainer ${selectedSubCategory === subCategory ? 'selected' : ''}`}>
                  <p className='categoryName'>{subCategory}</p>
                </button>
              ))}
          </Slider>
        </div>
        <div className='inputContainer'>
          <Input
            placeholder="Find a Product"
            id = "Product"
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
          {
            isFiltered ? (
              productFiltered.map((product) => (
                  <ProductCard key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart} />
              ))
              ) : (
              products.map((product) => (
                    <ProductCard key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
                ))
                )
            }
            {
                isFiltered && productFiltered.length === 0 && <h2>Instrument not found</h2>
            }
        </div>
      </div>
    </div>
  )
}



export default Products;
