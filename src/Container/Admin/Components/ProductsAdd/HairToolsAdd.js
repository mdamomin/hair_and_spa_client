import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function HairToolsAdd() {
  const { register, handleSubmit, reset } = useForm();
  const [hairToolsData, setHairToolsData] = useState([]);
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/hairTools', data).then((response) => {
      if (response.data.acknowledged) {
        alert('Hair Tools data inserted successfully');
        reset();
      }
    });
  };
  useEffect(() => {
    fetch('http://localhost:5000/hairTools')
      .then((response) => response.json())
      .then((data) => {
        setHairToolsData(data);
      });
  }, []);
  return (
    <div className='text-center'>
      <h4>Hair Tools Products</h4>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 col-md-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className=' form-control mb-2'
              type='text'
              placeholder='Hair Tools Name'
              {...register('Name', { required: true })}
            />
            <input
              className=' form-control mb-2'
              type='number'
              placeholder='Hair Tools Price'
              {...register('Price', { required: true })}
            />
            <input
              className=' form-control mb-2'
              type='text'
              placeholder='Brand Name'
              {...register('BrandName', { required: true })}
            />
            <textarea
              className=' form-control mb-2'
              type='text'
              placeholder='Description'
              {...register('Description', { required: true })}
            />
            <input
              className=' form-control mb-2'
              type='url'
              placeholder='Hair Tools image url'
              {...register('image', { required: true })}
            />

            <Button variant='primary' type='submit'>
              Add Product
            </Button>
          </form>
        </div>
      </div>
      <hr />
      <h2>Hair Tools Products List</h2>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>SI</th>
            <th scope='col'>Products Name</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Price</th>
            <th scope='col'>Picture</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hairToolsData?.map((singleHtData, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{singleHtData.name}</td>
              <td>{singleHtData.brand}</td>
              <td>$ {singleHtData.price}</td>
              <td>
                <img
                  src={singleHtData.picture}
                  style={{ width: '40px' }}
                  alt=''
                />
              </td>

              <td>
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
  );
}
