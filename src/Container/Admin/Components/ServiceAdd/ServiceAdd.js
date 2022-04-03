import React, { useEffect, useState } from 'react';
import HairShaping from './HairShaping/HairShaping';
import Facial from '../ServiceAdd/Facial/Facial';
import Waxing from '../ServiceAdd/Waxing/Waxing';
import Technical from '../ServiceAdd/Technical/Technical';
import BodyTreatment from '../ServiceAdd/BodyTreatment/BodyTreatment';
import Massage from './Massage/Massage';
import { Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const ServiceAdd = () => {
  const [state, setState] = useState('');
  const [servicesData, setServicesData] = useState([]);

  const initialData = {
    service: '',
    category: '',
    ageLimit: '',
    categoryName: '',
    categoryTime: '',
    categoryValue: '',
  };

  const [caseValue, setCaseValue] = useState(initialData);

  const handleOption = (e) => {
    setState(e.target.value);

    const service = e.target.name;
    const value = e.target.value;
    const newData = { ...caseValue };
    newData[service] = value;
    setCaseValue(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/services', caseValue).then((response) => {
      if (response.data.acknowledged) {
        alert('services data inserted successfully');
        e.target.reset();
        setCaseValue(initialData);
      }
    });
  };
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((response) => response.json())
      .then((data) => {
        setServicesData(data);
      });
  }, []);
  return (
    <div>
      <Sidebar></Sidebar>
      <div className='container text-center'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-sm-4 text-center pt-5'>
            <h2>Service Dashboard</h2>
            <form onSubmit={handleSubmit}>
              <select
                onChange={handleOption}
                name='service'
                className=' form-control mb-2 form-select'
              >
                <option defaultValue>Choose...</option>
                <option>Hair Shaping</option>
                <option>Facial</option>
                <option>Waxing</option>
                <option>Technical</option>
                <option>Body Treatment</option>
                <option>Massage</option>
              </select>

              {(() => {
                switch (state) {
                  case 'Facial':
                    return (
                      <Facial
                        setCaseValue={setCaseValue}
                        caseValue={caseValue}
                      ></Facial>
                    );
                  case 'Waxing':
                    return (
                      <Waxing
                        setCaseValue={setCaseValue}
                        caseValue={caseValue}
                      ></Waxing>
                    );
                  case 'Technical':
                    return (
                      <Technical
                        setCaseValue={setCaseValue}
                        caseValue={caseValue}
                      ></Technical>
                    );
                  case 'Body Treatment':
                    return (
                      <BodyTreatment
                        setCaseValue={setCaseValue}
                        caseValue={caseValue}
                      ></BodyTreatment>
                    );
                  case 'Massage':
                    return (
                      <Massage
                        setCaseValue={setCaseValue}
                        caseValue={caseValue}
                      ></Massage>
                    );
                  default:
                    return (
                      <HairShaping
                        setCaseValue={setCaseValue}
                        caseValue={caseValue}
                      ></HairShaping>
                    );
                }
              })()}
              <Button variant='primary' type='submit'>
                Add Service
              </Button>
            </form>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <hr />
            <h2>Services List</h2>
            <hr />
            <table className='table-bordered w-100'>
              <thead>
                <tr>
                  <th scope='col'>SI</th>
                  <th scope='col'>Service Name</th>
                  <th scope='col'>Service Details</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {servicesData?.map((singleService, index) => (
                  <tr key={index}>
                    <th scope='row' className='p-2'>
                      {index + 1}
                    </th>
                    <td>{singleService.service}</td>

                    <table className='table-bordered w-100'>
                      <thead>
                        <tr>
                          <th scope='col'>Category</th>
                          <th scope='col'>Category Name</th>
                          <th scope='col'>Time</th>
                          <th scope='col'>Age</th>
                          <th scope='col'>Price</th>
                        </tr>
                      </thead>
                      {singleService.data.map((servicePd, index) => (
                        <tbody key={index}>
                          <tr>
                            <td style={{ width: '30%' }}>
                              {servicePd.category ? (
                                <span>{servicePd.category}</span>
                              ) : (
                                'N/A'
                              )}
                            </td>
                            <td style={{ width: '30%' }}>
                              {servicePd.categoryName}
                            </td>
                            <td style={{ width: '15%' }}>
                              {servicePd.categoryTime ? (
                                <span>{servicePd.categoryTime} hrs</span>
                              ) : (
                                'N/A'
                              )}
                            </td>
                            <td style={{ width: '15%' }}>
                              {servicePd.ageLimit ? (
                                <span>{servicePd.ageLimit} yrs</span>
                              ) : (
                                'N/A'
                              )}
                            </td>
                            <td style={{ width: '10%' }}>
                              $ {servicePd.categoryValue}
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>

                    <td className='p-2'>
                      <button
                        type='button'
                        className='btn btn-info me-2'
                        data-bs-toggle='tooltip'
                        data-bs-placement='right'
                        title='Edit'
                      >
                        <i className='bi bi-pencil-square'></i>
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-bs-toggle='tooltip'
                        data-bs-placement='right'
                        title='Delete'
                      >
                        <i className='bi bi-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdd;
