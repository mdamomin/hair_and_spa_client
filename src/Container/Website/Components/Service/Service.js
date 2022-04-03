import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Service = () => {
  const [services, setServices] = useState([]);
  let hairShapings = services?.filter(
    (hairShaping) => hairShaping?.service === 'Hair Shaping'
  );
  const others = services?.filter((other) => other?.service !== 'Hair Shaping');
  const adults = hairShapings[0]?.data?.filter(
    (adult) => adult?.category === 'ADULT'
  );
  const kids = hairShapings[0]?.data?.filter((kid) => kid?.category === 'KIDS');
  const fishingOnlys = hairShapings[0]?.data?.filter(
    (fishingOnly) => fishingOnly?.category === 'FINISHING ONLY'
  );

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4 mb-3'>
            <div className='card border border-light shadow h-100'>
              <div className='card-header text-center fw-bold'>
                {services[0]?.service}
              </div>
              <div className='card-body text-start'>
                <div className='card mb-1'>
                  <div className='card-header bg-white fw-bold text-center'>
                    {adults && adults[0].category}
                  </div>
                  <ul className='list-group list-group-flush'>
                    {adults?.map((service, index) => {
                      return (
                        <li className='list-group-item' key={index}>
                          {service.categoryName} -- $ {service.categoryValue}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='card mb-1'>
                  <div className='card-header bg-white fw-bold text-center'>
                    {kids && kids[0].category}
                  </div>
                  <ul className='list-group list-group-flush'>
                    {kids?.map((service, index) => {
                      return (
                        <li className='list-group-item' key={index}>
                          {service.categoryName} -- $ {service.categoryValue}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='card'>
                  <div className='card-header bg-white fw-bold text-center'>
                    {fishingOnlys && fishingOnlys[0].category}
                  </div>
                  <ul className='list-group list-group-flush'>
                    {fishingOnlys?.map((fishingOnly, index) => {
                      return (
                        <li className='list-group-item' key={index}>
                          {fishingOnly.categoryName} -- ${' '}
                          {fishingOnly.categoryValue}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {others?.map((other, index) => (
            <div className='col-12 col-md-4 mb-3' key={index}>
              <div className='card border border-light shadow h-100'>
                <div className='card-header text-center fw-bold'>
                  {other?.service}
                </div>
                <div className='card-body text-start'>
                  <ul className='list-group list-group-flush'>
                    {other.data.map((singleData, index) => (
                      <span key={index}>
                        {singleData.category && (
                          <li className='list-group-item text-center text-info'>
                            **{singleData.category}**
                          </li>
                        )}
                        <li className='list-group-item'>
                          {singleData.categoryName}
                          {singleData.categoryTime && (
                            <span> - {singleData.categoryTime} mins</span>
                          )}{' '}
                          - $ {singleData.categoryValue}
                        </li>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
