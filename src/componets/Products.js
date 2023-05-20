import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Products() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Tableta</Card.Title>
        <Card.Text>
          Descripcion.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
