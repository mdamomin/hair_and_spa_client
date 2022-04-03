import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function SarynaKeyAdd() {
  const { register, handleSubmit, reset } = useForm();
  const [sarynaKeyData, setSarynaKeyData] = useState();
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/sarynaKey', data).then((response) => {
      if (response.data.insertedId) {
        alert('SarynaKey data inserted successfully');
        reset();
      }
    });
  };
  useEffect(() => {
    fetch('http://localhost:5000/sarynaKey')
      .then((response) => response.json())
      .then((data) => {
        setSarynaKeyData(data);
      });
  }, []);

  return (
    <div>
      <h4>Saryna Key Products</h4>

      <div className='row d-flex justify-content-center'>
        <div className='col-12 col-md-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className=' form-control mb-2'
              type='text'
              placeholder='Saryna Key Name'
              {...register('SarynaKeyName', { required: true })}
            />
            <input
              className=' form-control mb-2'
              type='number'
              placeholder='Saryna Key Price'
              {...register('SarynaKeyPrice', { required: true })}
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
              placeholder='Saryna Key image url'
              {...register('SarynaKeyImage', { required: true })}
            />

            <Button variant='primary' type='submit'>
              Add Product
            </Button>
          </form>
        </div>
      </div>

      <hr />
      <h2>Saryna Key Products List</h2>
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
          {sarynaKeyData?.map((singleSkData, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{singleSkData.name}</td>
              <td>{singleSkData.brand}</td>
              <td>$ {singleSkData.price}</td>
              <td>
                <img
                  src={singleSkData.picture}
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
