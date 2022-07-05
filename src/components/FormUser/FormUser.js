import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { createOrder } from '../../services/firebase/firestore'
import './FormUser.css'
import { FloatingLabel, Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap'

function FormUser() {
    const { cart, getTotal, clear } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [ showAlert, setShowAlert ] = useState(false)
    const [ idOrder, setIdOrder ] = useState()
    const [ validated, setValidated ] = useState(false)

    const [ buyer, setBuyer ] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        info: ''
    })
    
    const onSubmitOrder = (e) => {        
        e.preventDefault()

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        if(form.checkValidity() === true){
            setLoading(true)
            const fecha = new Date()
            const objOrder = {
                buyer,
                items: cart,
                date: fecha,
                total: getTotal()
            }

            createOrder(objOrder, cart).then(response => {                
                clear()
                setShowAlert(true)
                setIdOrder(response)
            }).catch(error => {
                console.log(error)
            }).finally( () => {
                setLoading(false)
            })
        }        
    }


return (
    <Container>
        {
            loading ? 
                <div style={{textAlign: 'center', marginTop: 250}}>
                    <Spinner animation="grow"/>
                </div>
                :
            showAlert ? 
                <Alert show={showAlert} variant='success' className='mt-5'>
                    <Alert.Heading className='text-center'>Gracias por comprar en Effy Clothes!</Alert.Heading>
                        <hr/>
                        <p className='text-center'>El id de la orden es: {idOrder}</p>                    
                    <div className="d-flex justify-content-center">
                        <Link to={'/'}><Button variant="outline-success">Volver al inicio</Button></Link>
                    </div>
                </Alert>
                :
            <>
                <h1 style={{color: '#AF7AC5'}} className='text-center mt-5'>Último paso</h1>
                <Form noValidate validated={validated} className='mt-5' onSubmit={onSubmitOrder}>                    
                    
                    <Row className='justify-content-md-center'>                  
                        <Form.Group as={Col}  sm={4}>
                            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                                <Form.Control required value={buyer.name} onChange={(e) => {setBuyer({...buyer, name: e.target.value})}} type="input" placeholder="Name"/>
                                <Form.Control.Feedback/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}  sm={4}>
                            <FloatingLabel controlId="floatingLastname" label="Lastname" className="mb-3">
                                <Form.Control required value={buyer.lastname} onChange={(e) => {setBuyer({...buyer, lastname: e.target.value})}} type="input" placeholder="Lastname"/>
                                <Form.Control.Feedback/>
                            </FloatingLabel>
                        </Form.Group>                    
                    </Row>

                    <Row className='justify-content-md-center'>                    
                        <Form.Group as={Col}  sm={4}>
                            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                            <Form.Control required value={buyer.phone} onChange={(e) => {setBuyer({...buyer, phone: e.target.value})}} type="number" placeholder="Phone" />
                                <Form.Control.Feedback/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}  sm={4}>
                            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                            <Form.Control required value={buyer.email} onChange={(e) => {setBuyer({...buyer, email: e.target.value})}} type="email" placeholder="E-mail" />
                            </FloatingLabel>
                        </Form.Group>                    
                    </Row>

                    <Row className='justify-content-md-center'>                    
                        <Form.Group as={Col}  sm={8}>
                            <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                            <Form.Control required value={buyer.address} onChange={(e) => {setBuyer({...buyer, address: e.target.value})}} type="input" placeholder="Address" />
                                <Form.Control.Feedback/>
                            </FloatingLabel>
                        </Form.Group>                   
                    </Row>

                    <Row className='justify-content-md-center'>                   
                        <Form.Group as={Col}  sm={8}>
                        <FloatingLabel controlId="floatingInfo" label="Info" className="mb-3">
                            <Form.Control as="textarea" maxLength={200} required value={buyer.info} onChange={(e) => {setBuyer({...buyer, info: e.target.value})}} placeholder="Ex. entre calles, timbre, portero" />
                                <Form.Control.Feedback/>
                            </FloatingLabel>
                        </Form.Group>
                        <Col sm={6} className="text-center">
                        <Button  type='submit' className='btn-validar btn-sm'>
                            Validar datos
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </>                         
        }
    </Container>
)}

export default FormUser