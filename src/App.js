import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>  
          <Route exact path='/' element={<ItemListContainer greeting='Holis, este es mi desafío :)'/>} />
          {/* <Route exact path='' element={<ItemCount/>} />    */}
          <Route exact path='/categoria/:categoryId' element={<ItemListContainer greeting='Filtrando por categoría'/>} />
          <Route exact path='/producto/:productId' element={<ItemDetailContainer greeting='Detalle del item' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
