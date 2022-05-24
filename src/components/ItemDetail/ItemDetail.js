import { Container, Row, Col, Card } from "react-bootstrap"
const ItemDetail = (props) => {

    const {title, description, price, pictureUrl} = props.product

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={pictureUrl} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">${price}</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail