import { getItem } from "../../asyncmock"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        getItem().then((response) => {
            setProduct(response)
        })
    },[])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer