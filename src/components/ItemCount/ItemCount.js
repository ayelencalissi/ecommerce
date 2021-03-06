import { useEffect, useState } from "react"
import './ItemCount.css'
import { Link } from 'react-router-dom'
import { Button, Form, Container, Row, Col, Alert  } from "react-bootstrap"

const ItemCount = ({onAdd, initial = 1, stock}) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if(count !== 1) setCount(count - 1);
  }

  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setCount(initial)
  },[initial])

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <div        
              style={{ width: "18rem" }} className="mt-2">
                {
                  stock === 0 ?
                  <Alert variant="warning" className="text-center">
                    Sin stock. Volver al <Link className='btn-volver-catalogo' to="/">catálogo</Link>.
                  </Alert>
                  :
                  <>
                    <div className="text-center">                    
                      <Button size="sm" onClick={decrement} className="me-4">
                        -
                      </Button>
                      <Form.Text>{count}</Form.Text>
                      {/* si el stock es distinto del contador o si el stock es cero que lo deje disabled true */}
                      {
                        stock !== count ? <Button size="sm" onClick={increment} className="ms-4">
                        + </Button> : (stock  === 0 ? <Button disabled="true" size="sm" onClick={increment} className="ms-4">
                        + </Button> : <Button disabled="true" size="sm" onClick={increment} className="ms-4"> + </Button>)
                      }            
                    </div>
                    <div className="text-center mt-2">
                      <Button onClick={() => onAdd(count)} > 
                        Agregar al carrito
                      </Button>
                    </div>
                  </>
                }                  
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )}

export default ItemCount;
