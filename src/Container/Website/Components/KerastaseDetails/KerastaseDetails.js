import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const KerastaseDetails = () => {
  const { kerastasePd } = useParams();
  return (
    <div>
      <NavBar></NavBar>
      <h1>KerastaseDetails</h1>
      <Footer></Footer>
    </div>
  );
};

export default KerastaseDetails;
