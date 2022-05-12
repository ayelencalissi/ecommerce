import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />  
        <ItemListContainer greeting='Holis, este es mi desafío :)'/>      
      </header>
    </div>
  );
}

export default App;
