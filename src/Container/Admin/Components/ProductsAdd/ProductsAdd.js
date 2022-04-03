import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const ProductsAdd = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className='container'>
        <div className='row d-flex justify-content-center text-center pt-5'>
          <h2>Products Dashboard</h2>
          <hr />
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdd;
