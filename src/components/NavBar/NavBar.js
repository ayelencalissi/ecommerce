import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { getCategories } from '../../services/firebase/firestore'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    const { cart } = useContext(CartContext)
    const [ categories, setCategories ] = useState([])
    
    useEffect(() => {
        getCategories().then(response => {
            setCategories(response)
        }).catch(error => {
            console.log(error)
        })
    },[])

    return(
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
                    {
                        categories.map((cat) => {
                            return <NavLink key={cat.id} to={`category/${cat.id}`} className={({isActive}) => isActive ? 'optionActive' : 'option'} >{cat.description}</NavLink>
                        })
                    }
                    </Nav>
                    <Nav className="justify-content-end">
                        {
                            cart.length == 0 ? null
                            :
                            <NavLink to={'cart'} className="justify-content-end option"><CartWidget/></NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar