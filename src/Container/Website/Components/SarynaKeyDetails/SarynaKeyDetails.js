import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const SarynaKeyDetails = () => {
  const { sarynaKeyPd } = useParams();
  return (
    <div>
      <NavBar></NavBar>
      <h1>SarynaKeyDetails</h1>
      <Footer></Footer>
    </div>
  );
};

export default SarynaKeyDetails;
