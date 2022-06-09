//import './ItemDetail.css'
import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const ItemDetail = (props) => {
    
    const [ product, setProduct ] = useState()
    const [quantity, setQuantity] = useState(0)
    const { addItem, cart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addItem(product, quantity)
    } 

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
                    {
                        props.product === undefined ? 
                        <div style={{textAlign: 'center', marginTop: 250}}>
                            <Spinner animation="grow"/>
                        </div> 
                        : 
                        <div>
                            <Card style={{ width: '95%' }}>
                            <Card.Img variant="top" src={product?.pictureUrl} />
                                <Card.Body>
                                    <Card.Title className="text-center">{product?.title}</Card.Title>
                                    <Card.Text>
                                        {product?.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted text-center">
                                    ${product?.price}
                                </Card.Footer>                        
                            </Card>
                            { quantity > 0 
                                ?   <Link to="/cart">Confirmar compra</Link>
                                :   <ItemCount onAdd={handleOnAdd}/>
                            }
                        </div>
                    }                    
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail