import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            {
                getQuantity()
            }
        </div>
    )
}

export default CartWidget