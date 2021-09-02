import React from 'react';
import './Productos.css';
import Title from './Components/Title/Title';
import TextButton from './Components/TextButtons/TextButton';
import TextCards from './Components/Text_Cards/TextCards';
//import Label from './Components/Title/Title';
import Navbar from './Components/Nav_Bar/Nav_bar';
//import Input from './Components/Input/Input';
//import Footer from './Components/Footer/Footer';
import Card from 'react-bootstrap/Card';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Productos = () =>{

  return(
    <div className='producto-container'>
        <Navbar />
        <Container>
        <Card style={{ width: '15rem', height: '10rem'}}>
          <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_608854-MCO44936508393_022021-O.webp" />
            <Card.Body>
              <Card.Title><Title text='Iphone 12'/></Card.Title>
              <Card.Text>
                <TextCards text='Toma fotos geniales con esa camara de ultima gama' />
              </Card.Text>
              <Button variant="primary"><TextButton text='comprar' /></Button>
          </Card.Body>
      </Card>
      </Container>
    </div>
  )
};

export default Productos;
