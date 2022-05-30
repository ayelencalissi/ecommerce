import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
//import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = (props) => {
    
    const [ product, setProduct ] = useState()

    useEffect(() => {
        props.product !== undefined ? setProduct(props.product[0]) : setProduct({
            title: '',
            description: '',
            price: 0,
            pictureUrl: ''
        })
    },[props.product])

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={product?.pictureUrl} />
                        <Card.Body>
                            <Card.Title className="text-center">{product?.title}</Card.Title>
                            <Card.Text>
                                {product?.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">${product?.price}</Card.Footer>                        
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail