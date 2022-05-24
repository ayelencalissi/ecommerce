import { Col, Card } from "react-bootstrap"
const Item = (props) => {

    const {id, title, description, price, pictureUrl} = props.item

    return (
        <Col md={3} className="mb-4">  
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pictureUrl} style={{height: '100%'}} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                </Card.Body>
            </Card>         
        </Col>
    )
}

export default Item