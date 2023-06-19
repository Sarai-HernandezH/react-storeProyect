import './App.css'
import Header from './components/header/Navbar';
import ItemList from '../src/components/ItemsListContainer';


function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ItemList />
      </div>
    </div>
  )
}

export default App
