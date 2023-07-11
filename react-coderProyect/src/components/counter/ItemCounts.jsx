const [counter, setCounter] = useState(0);

const isValidCounter = counter > 0;

const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
    if(!isValidCounter) return;
    setCounter((prevCounter) => prevCounter -1);
};

const Counter = () => {
    return (
    <div className='counterContainer'>
        <div className='buttonContainer'>
            <button type='button' className='counterButton' onClick={decrementCounter} disabled={!isValidCounter}>-</button>
                <h1 className='counterText'>0</h1>
            <button type='button' className='counterButton' onClick={incrementCounter}>+</button>
        </div>
    </div>
    )
}

export default Counter;