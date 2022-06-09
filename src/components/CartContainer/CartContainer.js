import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function CartContainer() {
  const { cart, removeItem, clear} = useContext(CartContext)

  return (
    <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <div >{prod.name}</div>
                            <div>Cantidad: {prod.quantity}</div>
                            <div>Precio x Uni: ${prod.price}</div>
                            <div>Subtotal: ${prod.price * prod.quantity}</div>
                            <button className='ml-4' onClick={() => removeItem(prod.id)}>X</button>
                        </div>
                    )})
                }
                <button onClick={clear}>Limpiar</button>
            </div>
        </div>
  )
}
