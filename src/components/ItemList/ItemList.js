import { getProducts, getProductsByCategory } from "../../asyncmock"
import Item from '../Item/Item'
import { useEffect, useState } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

const ItemList = () => {

    const { categoryId } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        if(!categoryId){
            getProducts().then((response) => {
                setProduct(response)
            })
        }else{
            getProductsByCategory(categoryId).then((response) => {
                setProduct(response)
            })
        }
    },[categoryId])

    return(
        <div>
            <Container>
                <Row>
                    {   
                    product.length == 0 ?
                        <div style={{textAlign: 'center', marginTop: 250}}>
                            <Spinner animation="grow"/>
                        </div> :
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