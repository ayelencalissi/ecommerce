import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (product, q) => {

        if(isInCart(product.id)){
            console.log('entre al if')
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
            console.log('entre al else')
            product.quantity = q
            setCart([...cart, product])
        }
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
        <CartContext.Provider value={{addItem, cart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext