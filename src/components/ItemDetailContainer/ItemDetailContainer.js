import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = (props) => {
    const { productId } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            const product = { 
                id: response.id,
                ...response.data()
            }
            setProduct(product)
        }).catch(error => {
            console.log(error)
        })

        /* getItem(productId).then((response) => {            
            setProduct(response)
        }) */
    },[productId])

    return (
        <div>
            <h1 style={{color: '#AF7AC5'}} className="text-center">{props.greeting}</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer