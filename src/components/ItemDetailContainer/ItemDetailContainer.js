import { getItem } from "../../asyncmock"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = (props) => {
    const { productId } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        getItem(productId).then((response) => {            
            setProduct(response)
        })
    },[productId])

    return (
        <div>
            <h1 style={{color: '#AF7AC5'}} className="text-center">{props.greeting}</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer