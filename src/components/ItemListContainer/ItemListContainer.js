//import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const {categoryId} = useParams()

    return (
        <div>
            <h1 style={{color: '#AF7AC5'}} className="text-center">
            {
                categoryId ? 
                categoryId.toUpperCase() :
                props.greeting
            }
            </h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
