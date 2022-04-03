import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Kerastase.css';

const Kerastase = () => {
  const [kerastaseData, setKerastaseData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/kerastase')
      .then((res) => res.json())
      .then((data) => {
        setKerastaseData(data);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        {kerastaseData.map((Kerastase) => (
          <div
            className={Kerastase.id % 2 !== 0 ? 'Kerastase_bg' : ''}
            key={Kerastase._id}
          >
            <div className='container py-5'>
              <h3>{Kerastase.categoryName}</h3>
              <div className='row'>
                {Kerastase.products.map((KPd) => (
                  <div className='col-12 col-md-3' key={KPd.PdID}>
                    <Card className='border-0 h-100 bg-transparent'>
                      <Card.Img variant='top' src={KPd.image} />
                      <Card.Body>
                        <Card.Title>{KPd.name}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>
                          {KPd.brand}
                        </Card.Subtitle>
                        <Card.Text>{KPd.description}</Card.Text>
                        <Card.Subtitle className='mb-2 text-muted'>
                          {KPd.price}
                        </Card.Subtitle>
                      </Card.Body>
                      <div className='card-footer bg-transparent border-0'>
                        <Button
                          variant='primary'
                          as={Link}
                          to={`/kerastase/${KPd.PdID}`}
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
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Kerastase;
