import { useState } from "react";
import { Button, Form, Card, Container, Row, Col  } from "react-bootstrap";
const ItemCount = () => {
  const [count, setCount] = useState(0);
  const stock = 5;

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card        
              style={{ width: "18rem" }}
              className="mb-2 card">
              <Card.Body>
                  <Card.Text className="text-center">
                    <Button variant="primary" size="sm" onClick={decrement} className="me-4">
                      -
                    </Button>
                    <Form.Text>{count}</Form.Text>
                    {/* si el stock es distinto del contador o si el stock es cero que lo deje disabled true */}
                    {
                      stock !== count ? <Button variant="primary" size="sm" onClick={increment} className="ms-4">
                      + </Button> : (stock  === 0 ? <Button variant="primary" disabled="true" size="sm" onClick={increment} className="ms-4">
                      + </Button> : <Button variant="primary" disabled="true" size="sm" onClick={increment} className="ms-4"> + </Button>)
                    }            
                  </Card.Text>
                  <Card.Text className="text-center">
                    <Button onClick={() => alert(count)}> 
                      Agregar al carrito
                    </Button>
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemCount;
