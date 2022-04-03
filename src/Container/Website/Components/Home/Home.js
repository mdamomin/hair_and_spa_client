import React from 'react';
import About from '../About/About';
import Products from '../Products/Products';
import TopCarousel from '../TopCarousel/TopCarousel';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <TopCarousel></TopCarousel>
      <About></About>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
