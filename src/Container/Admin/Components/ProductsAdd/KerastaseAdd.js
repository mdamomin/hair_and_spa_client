import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function KerastaseAdd() {
  const { register, handleSubmit, reset } = useForm();
  const [kerastaseData, setKerastaseData] = useState([]);
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/kerastase', data).then((response) => {
      if (response.data.acknowledged) {
        alert('Kerastase data inserted successfully');
        reset();
      }
    });
  };
  useEffect(() => {
    fetch('http://localhost:5000/kerastase')
      .then((response) => response.json())
      .then((data) => {
        setKerastaseData(data);
      });
  }, []);

  return (
    <div className='text-center'>
      <h4>Kerastase Products</h4>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 col-md-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className=' form-control mb-2'
              type='text'
              placeholder='Kérastase Product Category Name'
              {...register('CategoryName', { required: true })}
            />
            <input
              className=' form-control mb-2'
              type='text'
              placeholder='Kérastase Product Name'
              {...register('Name', { required: true })}
            />
            <input
              className=' form-control mb-2'
              type='number'
              placeholder='Kérastase Product Price'
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
              placeholder='Kérastase Product image url'
              {...register('image', { required: true })}
            />

            <Button variant='primary' type='submit'>
              Add Product
            </Button>
          </form>
        </div>
      </div>
      <hr />
      <h2>Kerastase Products List</h2>
      <hr />
      <table className='table-bordered w-100'>
        <thead>
          <tr>
            <th scope='col'>SI</th>
            <th scope='col'>Category Name</th>
            <th scope='col'>Product Details</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {kerastaseData?.map((singleKtData, index) => (
            <tr key={index}>
              <th scope='row' className='p-2'>
                {index + 1}
              </th>
              <td>{singleKtData.categoryName}</td>

              <table className='table-bordered w-100'>
                <thead>
                  <tr>
                    <th scope='col'>Products Name</th>
                    <th scope='col'>Brand</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Image</th>
                  </tr>
                </thead>
                {singleKtData.products.map((kerastasePd, index) => (
                  <tbody key={index}>
                    <tr>
                      <td style={{ width: '50%' }}>{kerastasePd.name}</td>
                      <td style={{ width: '24%' }}>{kerastasePd.brand}</td>
                      <td style={{ width: '13%' }}>$ {kerastasePd.price}</td>
                      <td style={{ width: '13%' }}>
                        <img
                          src={kerastasePd.image}
                          style={{ width: '40px' }}
                          alt=''
                        />
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
  );
}
