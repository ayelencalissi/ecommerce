import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (product, q) => {

        if(isInCart(product.id)){
            const cartNuevo = cart.map(prd => {
                if(prd.id === product.id) {
                    const productoNuevo = {
                        ...prd,
                        quantity: q
                    }
                    return productoNuevo
                } else {
                   return prd 
                }
            })
            setCart(cartNuevo)
        }else{
            product.quantity = q
            setCart([...cart, product])
        }
    }

    const getQuantity = () => {
        let accu = 0
        cart.map(item =>  accu+= item.quantity)
        return accu
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        return total
    }

    const removeItem = (id) => {
        const cartFilter = cart.filter(prod => prod.id !== id)
        setCart(cartFilter)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }


    return(
        <CartContext.Provider value={{addItem, cart, removeItem, clear, getQuantity, getProduct, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext