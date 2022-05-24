import { getProducts } from "../../asyncmock"
import Item from '../Item/Item'
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"

const ItemList = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProducts().then((response) => {
            setProduct(response)
        })
    },[])

    return(
        <div>
            <Container>
                <Row>
                    {
                        product.map((prod) => {
                            return <Item key={prod.id} item={prod} />
                        })
                    }
                </Row>
            </Container>            
        </div>
    )
}

export default ItemList