import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './context/CartContext'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FormUser from './components/FormUser/FormUser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>  
            <Route exact path='/' element={<ItemListContainer greeting='Holis, este es mi desafío :)'/>} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/checkout' element={<FormUser/>} />
            <Route exact path='*' element={<Navigate to={'/'}/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
