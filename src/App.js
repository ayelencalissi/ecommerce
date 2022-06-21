import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext'
import FormUser from './components/FormUser/FormUser';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>  
            <Route exact path='/' element={<ItemListContainer greeting='Holis, este es mi desafío :)'/>} />
            {/* <Route exact path='' element={<ItemCount/>} />    */}
            <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/checkout' element={<FormUser/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
