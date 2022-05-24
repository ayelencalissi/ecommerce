//import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 style={{color: '#AF7AC5'}} className="text-center">{props.greeting}</h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
