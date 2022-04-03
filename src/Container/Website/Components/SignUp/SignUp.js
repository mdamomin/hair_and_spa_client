import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../../../App';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

import './SignUp.css';

const SignUp = () => {
  const {
    handleOnBlur,
    loginData,
    isLoading,
    signupUser,
    signupSuccess,
    signupError,
  } = useContext(Authcontext);
  const [alert, setAlert] = useState('');
  const { displayName, email, password, cpassword } = loginData;
  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setAlert('Your password did not match');
      return;
    } else {
      setAlert('');
      signupUser(email, password, displayName);
    }
    e.preventDefault();
  };

  return (
    <div>
      <NavBar></NavBar>
      <section className='bg-image text-start'>
        <div className='mask d-flex align-items-center h-100 gradient-custom-3 py-5'>
          <div className='container h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                <div className='card' style={{ borderRadius: '15px' }}>
                  <div className='card-body p-5'>
                    <h4 className='text-uppercase text-center mb-5'>
                      Please complete Sign Up
                    </h4>

                    {isLoading ? (
                      <div className='text-center'>
                        <span
                          className='spinner-border spinner-border-sm'
                          role='status'
                          aria-hidden='true'
                        ></span>
                        Loading...
                      </div>
                    ) : (
                      <form onSubmit={handleSignup}>
                        <div className='form-outline mb-4'>
                          <input
                            type='text'
                            id='form3Example1cg'
                            className='form-control form-control-lg'
                            placeholder='Your Name'
                            required
                            name='displayName'
                            onBlur={handleOnBlur}
                          />
                        </div>

                        <div className='form-outline mb-4'>
                          <input
                            type='email'
                            id='form3Example3cg'
                            className='form-control form-control-lg'
                            placeholder='Your Email'
                            name='email'
                            required
                            onBlur={handleOnBlur}
                          />
                        </div>

                        <div className='form-outline mb-4'>
                          <input
                            type='password'
                            id='form3Example4cg'
                            className='form-control form-control-lg'
                            placeholder='Password'
                            name='password'
                            required
                            onBlur={handleOnBlur}
                          />
                        </div>

                        <div className='form-outline mb-4'>
                          <input
                            type='password'
                            id='form3Example4cdg'
                            className='form-control form-control-lg'
                            placeholder='Repeat your password'
                            name='cpassword'
                            required
                            onBlur={handleOnBlur}
                          />
                        </div>
                        <div className='form-check d-flex justify-content-center mb-5'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            id='form2Example3cg'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='form2Example3g'
                          >
                            I agree all statements in{' '}
                            <a href='#!' className='text-body'>
                              <u>Terms of service</u>
                            </a>
                          </label>
                        </div>
                        {alert && (
                          <div
                            className='alert alert-danger d-flex align-items-center'
                            role='alert'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='26'
                              height='26'
                              fill='currentColor'
                              className='bi bi-exclamation-diamond-fill me-3'
                              viewBox='0 0 16 16'
                            >
                              <path d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                            </svg>

                            <div>{alert}</div>
                          </div>
                        )}
                        {signupError && (
                          <div
                            className='alert alert-danger d-flex align-items-center'
                            role='alert'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='26'
                              height='26'
                              fill='currentColor'
                              className='bi bi-exclamation-diamond-fill me-3'
                              viewBox='0 0 16 16'
                            >
                              <path d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                            </svg>

                            <div>{signupError}</div>
                          </div>
                        )}

                        {signupSuccess && (
                          <div
                            className='alert alert-success d-flex align-items-center'
                            role='alert'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='26'
                              height='26'
                              fill='currentColor'
                              className='bi bi-exclamation-diamond-fill me-3'
                              viewBox='0 0 16 16'
                            >
                              <path d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                            </svg>

                            <div>
                              <span>
                                Sign Up has been completed successfully! Go back
                                to <NavLink to='/login'>Login</NavLink> page
                              </span>
                            </div>
                          </div>
                        )}

                        <div className='d-flex justify-content-center'>
                          <button
                            type='submit'
                            className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'
                          >
                            Sign Up
                          </button>
                        </div>

                        <p className='text-center text-muted mt-5 mb-0'>
                          Have already an account?{' '}
                          <NavLink to='/login'>Login here</NavLink>
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
