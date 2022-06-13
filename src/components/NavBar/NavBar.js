import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const NavBar = () => {
    
    const { cart } = useContext(CartContext)

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <NavLink to={'/'} className={'optionActive'} >
                            <FontAwesomeIcon icon={faCloudMoon}/>
                            Effy Clothes
                        </NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={'category/pijamas'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Pijamas</NavLink>
                        <NavLink to={'category/tops'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Tops</NavLink>
                        <NavLink to={'category/jeans'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Jeans</NavLink>
                        <NavLink to={'category/accesorios'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Accesorios</NavLink>                        
                    </Nav>
                    <Nav className="justify-content-end">
                        {
                            cart.length == 0 ?
                                null
                                :
                            <NavLink to={'cart'} className="justify-content-end option"> <CartWidget/> </NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar