import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
const ItemDetail = (props) => {

   //const {title, description, price, pictureUrl} = props?.product
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: 0,
        pictureUrl: ''
    })

    useEffect(() =>{
        setProduct(props.product)
    },[props.product])

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={product?.pictureUrl} />
                        <Card.Body>
                            <Card.Title>{product?.title}</Card.Title>
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