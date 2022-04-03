import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Packages.css';

const Packages = () => {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then((res) => res.json())
      .then((data) => setPackagesData(data));
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className='packages'>
        <div className='package_top'>
          <div className='d-flex flex-column align-items-center justify-content-center h-100'>
            <h2>Your personal day at Beauty Hair And Spa.</h2>
            <h6>We invite you to experience a day of beauty and relaxation.</h6>
          </div>
        </div>
        <div className='container py-3'>
          <div className='row'>
            {packagesData.map((singlePD, index) => (
              <div className='col-12 col-md-4 my-2' key={index}>
                <div className='card h-100 text-center'>
                  <div className='card-header'>
                    <h5>{singlePD.name}</h5>
                    <h3>$ {singlePD.price}</h3>
                  </div>
                  <ul className='list-group list-group-flush'>
                    {singlePD.time && (
                      <li className='list-group-item'>{singlePD.time} Hours</li>
                    )}

                    {singlePD?.category?.map((singleCategory, index) => (
                      <ul className='list-group list-group-flush' key={index}>
                        {singleCategory && (
                          <li className='list-group-item'>{singleCategory}</li>
                        )}
                      </ul>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Packages;
