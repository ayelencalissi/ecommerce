import { Link } from 'react-router-dom'
import './Item.css'
import { Col, Card } from "react-bootstrap"

const Item = (props) => {
    const {id, title, pictureUrl} = props.item

    return (
        <Col md={3} className="mb-4">  
            <Card style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" src={pictureUrl} style={{height: '100%'}} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <div className="centered">
                        <Link to={`/item/${id}`} className="btn-detalle">Ver detalle</Link>
                    </div>
                </Card.Body>
            </Card>       
        </Col>
    )
}

export default Item