import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './HairTools.css';

const HairTools = () => {
  const [hairTools, setHairTools] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/hairTools')
      .then((res) => res.json())
      .then((data) => {
        setHairTools(data);
      });
  }, []);
  // const hairTools = [
  //   {
  //     id: 1,
  //     name: 'Advance Light',
  //     brand: 'PARLUX',
  //     description:
  //       'Achieve salon-worthy results with the Advance Light Ceramic Ionic Hair Dryer. Delivering superior performance, the Advance hair dryer aims to meet hairdressing standards to allow for a professional blow dry. The hair dryer is host to Parlux’s innovative 2200 Watt ‘K-ADVANCE’ motor, which is powerful and durable; shortening the time it takes to dry hair, whilst extending the lifespan of the dryer',
  //     price: 'C$200',
  //     picture: 'https://i.ibb.co/M2sb9ss/t5.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'H3000 Pro Flat Iron 1 3/8"',
  //     brand: 'HAIRART',
  //     description:
  //       'Trusted by stylists to deliver sensational results, the H3000 is the original "best selling" iron that inspired the collection. - 1 3/8" Diamond, Ceramic, Tourmaline Plates - Temperature control with variable heat settings up to 450F - New! Diamond coated plates glisten and glide smoothly throughout hair. - Prevents split ends and frizz.',
  //     price: 'C$120',
  //     picture: 'https://i.ibb.co/PrXWf82/t10.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'CHI Original Pro Flat Iron 1"',
  //     brand: 'CHI',
  //     description:
  //       'Utilizes the latest innovative technology combining Tourmaline Ceramic with even heat distribution, producing an exceptionally high amount of negative ions and Far Infrared which reduce static electricity for that perfect style. Hair is left smooth and silky with an unparalleled shine. 2 Year Limited Warranty.',
  //     price: 'C$120',
  //     picture: 'https://i.ibb.co/d2vgsjz/chi.png',
  //   },
  // ];
  return (
    <div>
      <NavBar></NavBar>
      <div className='hairTools'>
        <div className='gradient-custom py-4'>
          <div className='hairTools_top'>
            <div className='d-flex flex-column align-items-center justify-content-center h-100 text-white'>
              <h2>The best salon quality products.</h2>
              <h6>Mention our website and receive 20% OFF!</h6>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              {hairTools.map((hairTool) => (
                <div className='col-12 col-md-4' key={hairTool._id}>
                  <Card className='h-100 d-flex justify-content-center flex-column text-center'>
                    <div>
                      <Card.Img
                        variant='top'
                        className='img-fluid'
                        src={hairTool.picture}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{hairTool.name}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {hairTool.brand}
                      </Card.Subtitle>
                      <Card.Text>{hairTool.description}</Card.Text>
                      <Card.Subtitle className='mb-2 text-muted'>
                        $ {hairTool.price}
                      </Card.Subtitle>
                    </Card.Body>
                    <div className='card-footer'>
                      <Button
                        variant='primary'
                        as={Link}
                        to={`/hairTools/${hairTool.id}`}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HairTools;
