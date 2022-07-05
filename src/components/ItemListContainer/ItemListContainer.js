import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { Spinner } from "react-bootstrap"
import { useFirestore } from '../../hooks/useFirestore'

const ItemListContainer = (props) => {
    const {categoryId} = useParams()
    const { loading, data, error } = useFirestore(() => getProducts(categoryId), [categoryId])

    if(error) {
        return <h1 style={{color: '#AF7AC5'}} className='text-center mt-5'>500 - Internal Server Error</h1>
    }
    
    return (
        <div>
            <h1 style={{color: '#AF7AC5'}} className="text-center">
                {
                    categoryId ? 
                    categoryId.toUpperCase() :
                    props.greeting
                }
            </h1>            
            {
                loading ? 
                <div style={{textAlign: 'center', marginTop: 250}}>
                    <Spinner animation="grow"/>
                </div>
                :
                <ItemList products={data}/>
            }            
        </div>
    )
}

export default ItemListContainer
