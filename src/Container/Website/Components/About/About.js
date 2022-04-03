import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='container-fluid about'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <img
            className='w-100 h-100'
            src='https://i.ibb.co/gFVpVGb/1.jpg'
            alt=''
          />
        </div>
        <div className='col-12 col-md-6 p-4'>
          <h4>About Beauty Hair And Spa</h4>
          <p>
            Look your best for less at Jean Nicola Salon Spa. Our versatile day
            spa and hair salon in Toronto, Ontario, offers a variety of services
            designed just for you. Backed by more than 15 years of experience,
            we specialize in everything from hair coloring to pedicures.
          </p>
          <p>
            Owner Jean Nicola is a self-taught master stylist. He started out
            working with his brother as a hair assistant washing hair, folding
            towels, and sweeping floors. He enjoyed it, and began doing hair on
            his own. He soon found that he had a natural talent for cutting
            hair. Though he enrolled in hairstylist school, he left it behind
            after three months, as he didn't agree with their line of teaching.
          </p>
          <p>
            Setting out on his own, he learned from experience and his own
            practiced eye. To Jean Nicola, certificates are fine, but its
            experience that makes all the difference. When Jean sees a customer
            for the first time, he knows what they want!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
