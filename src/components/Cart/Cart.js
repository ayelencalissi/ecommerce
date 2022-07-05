import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './Cart.css';
import { Alert, ListGroup, Badge, Container, Row, Col, Button } from "react-bootstrap";

export default function Cart() {
    const { cart, removeItem, clear} = useContext(CartContext)
    let total = 0

return (
    <div>
        {
            cart.length == 0 ? 
            <>
                <Alert variant="warning" className="text-center mt-5">
                    <Alert.Heading>No hay productos agregados a su carrito</Alert.Heading>
                    Volver al <Alert.Link href="/">catálogo</Alert.Link>.
                </Alert>
            </>
            :
            <>
            <h1 style={{color: '#AF7AC5'}} className="text-center">Mi carrito</h1>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col sm={8}>
                            {cart.map((prod, index) => {
                                total+=prod.price * prod.quantity
                                return(
                                    <div key={index}>
                                        <ListGroup>
                                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start mt-2" variant="secondary">
                                                <div className="ms-2 me-auto">
                                                <div className="fw-bold">{prod.title}</div>
                                                    Precio x Unidad: ${prod.price} | Subtotal: ${prod.price * prod.quantity}
                                                </div>
                                                <Badge bg="dark" pill>
                                                Cantidad: {prod.quantity} 
                                                </Badge>
                                                <Badge bg="danger" className='btn-borrar' onClick={() => removeItem(prod.id)}>
                                                    X
                                                </Badge>                                                                        
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                )})
                            }
                            <h3 style={{color: '#000000'}} className="text-center mt-2">Total a pagar: ${total}</h3>
                        </Col>
                    </Row> 
                    <Row className='justify-content-md-center mt-3'> 
                        <Col sm="auto">
                            <Button className="btn-crear btn-sm" onClick={clear}>Limpiar</Button>
                            <Link to={'/checkout'}><Button className="btn-crear btn-sm me-md-2">Crear orden</Button></Link>
                        </Col> 
                    </Row> 
                </Container>
            </>
        }        
    </div>
)}
