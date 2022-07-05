import { useParams } from "react-router-dom"
import { getProduct } from "../../services/firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"
import { useFirestore } from "../../hooks/useFirestore"

const ItemDetailContainer = (props) => {
    const { productId } = useParams()
    const { loading, data, error } = useFirestore(() => getProduct(productId), [productId])

    if(error) {
        return <h1 style={{color: '#AF7AC5'}} className='text-center mt-5'>500 - Internal Server Error</h1>
    }

    return (
        <div>
            { 
                loading ? 
                <div style={{textAlign: 'center', marginTop: 250}}>
                    <Spinner animation="grow"/>
                </div>
                :
                <div> 
                    <h1 style={{color: '#AF7AC5'}} className="text-center">{props.greeting}</h1>
                    <ItemDetail product={data}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer