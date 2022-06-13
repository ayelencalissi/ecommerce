import { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col  } from "react-bootstrap";
import './ItemCount.css'

const ItemCount = ({onAdd, initial = 1}) => {
  const [count, setCount] = useState(initial);

  const stock = 12;

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemCount;
