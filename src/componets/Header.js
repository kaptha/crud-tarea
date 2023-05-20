import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import tablet1 from '../images/tab1.jpg';
import tablet2 from '../images/tab2.jpg';
import tablet3 from '../images/tab3.jpg';
export default function Header() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tablet1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Amplia variedad de tabletas</h3>
          <p>Manejamos todas las marcas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tablet2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>El mejor precio del mercado</h3>
          <p>Promociones todo el año.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tablet3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>En la puerta de tu casa</h3>
          <p>
            Pide hoy y recibe en maximo 2 dias.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
