import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Form, Button } from 'react-bootstrap'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Alert from '../Alert/Alert'

function FormUser() {
    const { cart, getTotal, clear } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [ buyer, setBuyer ] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        info: ''
    })

    const createOrder = (e) => {
        setLoading(true)
        e.preventDefault()
        const fecha = new Date()
        const fueraDeStock = []
        const collectionRef = collection(db, 'products')
        const idsDelCart = cart.map(prod => prod.id)
        const batch = writeBatch(db)

        const objOrder = {
            buyer,
            items: cart,
            date: fecha,
            total: getTotal()
        }

        getDocs(query(collectionRef, where(documentId(), 'in', idsDelCart)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        fueraDeStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(fueraDeStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {                
                    alert('No hay stock suficiente')
                }
            }).then(({ id }) => {
                batch.commit()
                clear()
                alert(`El id de la orden es ${id}`)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading){
        return <h1>loading</h1>
    }

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={buyer.name} onChange={(e) => {setBuyer({...buyer, name: e.target.value})}} type="input" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>LastName</Form.Label>
            <Form.Control value={buyer.lastname} onChange={(e) => {setBuyer({...buyer, lastname: e.target.value})}} type="input" placeholder="LastName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control value={buyer.phone} onChange={(e) => {setBuyer({...buyer, phone: e.target.value})}} type="number" placeholder="Phone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={buyer.email} onChange={(e) => {setBuyer({...buyer, email: e.target.value})}} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control value={buyer.address} onChange={(e) => {setBuyer({...buyer, address: e.target.value})}} type="input" placeholder="Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInfo">
            <Form.Label>Info</Form.Label>
            <Form.Control value={buyer.info} onChange={(e) => {setBuyer({...buyer, info: e.target.value})}} type="input" placeholder="Info" />
        </Form.Group>

        <Button onClick={createOrder} variant="primary" type='submit'>
            Validar datos
        </Button>
    </Form>
  )
}

export default FormUser