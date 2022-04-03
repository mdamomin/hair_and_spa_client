import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './SarynaKey.css';

const SarynaKey = () => {
  const [sarynaKeyData, setSarynaKeyData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/sarynaKey')
      .then((res) => res.json())
      .then((data) => setSarynaKeyData(data));
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className='sarynaKey'>
        <div className='gradient-custom py-4'>
          <div className='sarynaKey_top'>
            <div className='d-flex flex-column align-items-center justify-content-center h-100'>
              <h2>Hair Therapy Saryna Key.</h2>
              <h6>Mention our website and receive 20% OFF!</h6>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              {sarynaKeyData.map((sarynaKey) => (
                <div className='col-12 col-md-3' key={sarynaKey._id}>
                  <Card className='h-100 d-flex justify-content-center flex-column text-center'>
                    <div>
                      <Card.Img
                        variant='top'
                        className='img-fluid'
                        src={sarynaKey.picture}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{sarynaKey.name}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {sarynaKey.brand}
                      </Card.Subtitle>
                      <Card.Text>{sarynaKey.description}</Card.Text>
                      <Card.Subtitle className='mb-2 text-muted'>
                        $ {sarynaKey.price}
                      </Card.Subtitle>
                    </Card.Body>
                    <div className='card-footer'>
                      <Button
                        variant='primary'
                        as={Link}
                        to={`/sarynaKey/${sarynaKey.id}`}
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

export default SarynaKey;
