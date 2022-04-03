import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const HairToolsDetails = () => {
  const { hairToolsPd } = useParams();
  return (
    <div>
      <NavBar></NavBar>
      <h1>HairToolsDetails</h1>
      <Footer></Footer>
    </div>
  );
};

export default HairToolsDetails;
