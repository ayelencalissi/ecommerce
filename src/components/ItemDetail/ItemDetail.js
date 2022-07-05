import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProduct } = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addItem(product, quantity)
    } 
        
    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>                    
                    {
                       product === undefined ? 
                        <div style={{textAlign: 'center', marginTop: 250}}>
                            <Spinner animation="grow"/>
                        </div> 
                        : 
                        <div>
                            <Card style={{ width: '95%' }}>
                            <Card.Img variant="top" src={product.pictureUrl} />
                                <Card.Body>
                                    <Card.Title className="text-center">{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted text-center">
                                    ${product.price}
                                </Card.Footer>                        
                            </Card>
                            { quantity > 0 ?   
                                <div className="centered">
                                    <Link to="/cart" className="btn-detalle mt-3">Confirmar compra</Link>
                                </div>
                                :   
                                <ItemCount onAdd={handleOnAdd} initial={getProduct(product.id)?.quantity} stock={product.stock}/>
                            }
                        </div>
                    }                    
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail