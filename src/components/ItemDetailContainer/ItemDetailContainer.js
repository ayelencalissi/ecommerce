import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = (props) => {
    const { productId } = useParams()

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    // acordarme de hacer los loading en el resto de componentes

    useEffect(() => {
        setLoading(true)
        
        getDoc(doc(db, 'products', productId)).then(response => {
            const product = { 
                id: response.id,
                ...response.data()
            }
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        /* getItem(productId).then((response) => {            
            setProduct(response)
        }) */
    },[productId])

    if(loading){
        return <h1>loading</h1>
    }

    return (
        <div>
            <h1 style={{color: '#AF7AC5'}} className="text-center">{props.greeting}</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer