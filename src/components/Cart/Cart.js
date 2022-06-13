import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

export default function Cart() {
    const { cart, removeItem, clear} = useContext(CartContext)
    let total = 0

  return (
    <div>
        {
            cart.length == 0 ? 
            <>
            <h1>no hay items</h1> 
            <Link to={'/'}>Ir al catalogo</Link>
            </>
            :
            <>
            <h1>Mi carrito</h1>
            <div>
                {cart.map(prod => {
                    total+=prod.price * prod.quantity
                    return(
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <div >{prod.title}</div>
                            <div>Cantidad: {prod.quantity}</div>
                            <div>Precio x Uni: ${prod.price}</div>
                            <div>Subtotal: ${prod.price * prod.quantity}</div>
                            <button className='ml-4' onClick={() => removeItem(prod.id)}>X</button>                            
                        </div>
                    )})
                }
                <h3>Total: {total}</h3>
                <button onClick={clear}>Limpiar</button>
            </div>
            </>
        }
        
    </div>
  )
}
