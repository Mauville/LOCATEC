import React from "react";
import { Button, 
    InputGroup,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
  } from 'reactstrap'
  import './App.css'
  import axios from 'axios';
  import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
 

const Catalogo = () =>{
    return(
       <div className="App">
        <Header />
        <div>
        </div>
        <div>
          <a href="https://tec.mx/es" target="_blank">
            <img src="/logoborrego.png" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>¿Qué artículo estás buscando?</h1>
        <div className='busqueda'>
        <img src="/teus.png" className="logo" alt="teus logo" />
        <InputGroup className='barra'>
          <Input placeholder='El artículo que busco es...'/>
          <Button color="primary">
            Buscar
          </Button>
        </InputGroup>
        </div>
        <br />
        <div>
        <Button outline color="info" href="/Catalogo"> Ir al catálogo </Button>
        </div>
        <br />
  
        <div className="cardi">
          <Card
            style={{
              width: '18rem'
            }}
          >
            
            <ProductCard product_id={1}></ProductCard>

          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/iphone.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/airpods.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>


          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/raquetas.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/iphone.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/airpods.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>



          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/raquetas.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/iphone.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/airpods.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>


          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/raquetas.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/iphone.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="/airpods.png"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button outline color="info">
                Button
              </Button>
            </CardBody>
          </Card>

          

        </div>
        <br/>
        <p className="read-the-docs">
          Calle del Puente 222, Col. Ejidos de Huipulco, Tlalpan, Ciudad de México, C.P. 14380 D.R.© INSTITUTO TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY, MÉXICO. 2022
        </p>
      </div>
    )
}

export default Catalogo;