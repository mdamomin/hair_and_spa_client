import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';

import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function PackagesAdd() {
  const [packagesData, setPackagesData] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/packages', data).then((response) => {
      if (response.data.insertedId) {
        alert('Package data inserted successfully');
        reset();
        setIsLoading(!isLoading);
      }
    });
  };
  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then((response) => response.json())
      .then((data) => setPackagesData(data));
  }, [isLoading]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/packages/${id}`).then((response) => {
      if (response.data.acknowledged) {
        alert('Package data deleted successfully');
      }
      const remainingPackages = packagesData.filter(
        (SinglePackage) => SinglePackage._id !== id
      );
      setPackagesData(remainingPackages);
    });
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-sm-4 pt-5'>
            <h2>Packages Dashboard</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className=' form-control mb-2'
                type='text'
                placeholder='Package Name'
                {...register('PackageName', { required: true })}
              />
              <input
                className=' form-control mb-2'
                type='number'
                placeholder='Package Price'
                {...register('PackagePrice', { required: true })}
              />
              <input
                className=' form-control mb-2'
                type='number'
                step='0.01'
                placeholder='Required Time'
                {...register('Time', { required: false })}
              />
              <input
                className=' form-control mb-2'
                type='text'
                placeholder='Package Category 1'
                {...register('PackageCategory_1', { required: true })}
              />
              <input
                className=' form-control mb-2'
                type='text'
                placeholder='Package Category 2'
                {...register('PackageCategory_2', { required: true })}
              />
              <input
                className=' form-control mb-2'
                type='text'
                placeholder='Package Category 3'
                {...register('PackageCategory_3', { required: false })}
              />
              <input
                className=' form-control mb-2'
                type='text'
                placeholder='Package Category 4'
                {...register('PackageCategory_4', { required: false })}
              />
              <input
                className=' form-control mb-2'
                type='text'
                placeholder='Package Category 5'
                {...register('PackageCategory_5', { required: false })}
              />

              <Button variant='primary' type='submit'>
                Add Package
              </Button>
            </form>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-12'>
            <hr />
            <h2>Packages List</h2>
            <hr />
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>SI</th>
                  <th scope='col'>Package Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Time</th>
                  <th scope='col'>Categories</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {packagesData.map((pkData, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{pkData.name}</td>
                    <td>$ {pkData.price}</td>
                    <td>{pkData.time && <span>{pkData.time} hrs</span>}</td>
                    <td>
                      {pkData.category.map((singleCG, index) => {
                        if (singleCG !== '') {
                          return <span key={index}>{singleCG}, </span>;
                        }
                      })}
                    </td>
                    <td>
                      <Button
                        className='me-2'
                        variant='info'
                        data-bs-toggle='tooltip'
                        data-bs-placement='right'
                        title='Edit'
                        as={Link}
                        to={`/admin/packages/${pkData._id}`}
                      >
                        <i className='bi bi-pencil-square'></i>
                      </Button>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-bs-toggle='tooltip'
                        data-bs-placement='right'
                        title='Delete'
                        onClick={() => {
                          handleDelete(pkData._id);
                        }}
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
}
