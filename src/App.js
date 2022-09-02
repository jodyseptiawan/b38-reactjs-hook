//import useState & useEffect here
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import productData from "./data/product.json";

function App() {
  const [datas, setDatas] = useState(productData);

  return (
    <Container>
      <Row className="mt-4">
        {datas.map((data, idx) => (
          <Col md={3} key={idx}>
            <Card className="shadow">
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
                <Card.Text>Rp. {data.price}</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
