import { Container, Row } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({ products }) => {

    return(
        <Container>
            <Row>
                {
                    products.map((prod) => {
                        return <Item key={prod.id} item={prod} />
                    })
                }         
            </Row>
        </Container>
    )
}

export default ItemList