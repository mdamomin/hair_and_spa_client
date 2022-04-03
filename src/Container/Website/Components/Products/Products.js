import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const serviceData = [
    {
      id: 1,
      name: 'HAIR AND SPA SERVICES',
      type: 'sarynaKey',
      img: 'https://i.ibb.co/kxHR9VR/s1.png',
    },
    {
      id: 2,
      name: 'KERASTASE PRODUCTS',
      type: 'kerastase',
      img: 'https://i.ibb.co/rp4HhHN/s2.png',
    },
    {
      id: 3,
      name: 'PROFESSIONAL HAIR TOOLS ',
      type: 'hairTools',
      img: 'https://i.ibb.co/hDVgFKd/s3.png',
    },
  ];

  return (
    <div className='products py-5'>
      <div className='container'>
        <div className='row'>
          <h4>Beauty Hair And Spa Services & Products</h4>
          <p>
            We invite you to experience a day of beauty and relaxation. Our
            professional team takes the time to listen to you and learn how to
            help bring out your beauty. As a full-service day spa, Jean Nicola
            Salon Spa offers a diverse range of treatments to help you relax,
            feel younger, and look beautiful. Our specialties include nail care,
            massage therapy, facial treatments, and waxing.
          </p>
          <p>
            We use only the best products to achieve a healthy, natural, and
            long-lasting look.
          </p>
        </div>
        <div className='row'>
          {serviceData.map((service) => (
            <div className='col-12 col-md-4 pt-3' key={service.id}>
              <Card>
                <Card.Img variant='top' src={service.img} />
                <Card.Body>
                  <NavLink to={`/${service.type}`} className='btn btn-primary'>
                    {service.name}
                  </NavLink>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
