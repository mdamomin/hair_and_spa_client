import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [date, setDate] = useState(new Date());
  const initialData = {
    name: '',
    email: '',
    Phone: '',
    department: '',
    description: '',
  };
  const [appointmentData, setAppointmentData] = useState(initialData);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newAppointmentData = { ...appointmentData };
    newAppointmentData[name] = value;
    setAppointmentData(newAppointmentData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAppointmentData = {
      ...appointmentData,
      date: date.toLocaleDateString(),
      hours: date.getHours(),
      min: date.getMinutes(),
    };
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 text-start d-flex justify-content-center flex-column py-4'>
            <h4>Appointment</h4>
            <Form className='w-100' onSubmit={handleSubmit}>
              <Row className='mb-3'>
                <div className='col-sm-6 mb-3'>
                  <Form.Group controlId='formGridName'>
                    <Form.Control
                      type='text'
                      name='name'
                      onChange={handleInputs}
                      placeholder='Your name'
                    />
                  </Form.Group>
                </div>
                <div className='col-sm-6'>
                  <Form.Group controlId='formGridEmail'>
                    <Form.Control
                      type='email'
                      name='email'
                      onChange={handleInputs}
                      placeholder='Enter email'
                    />
                  </Form.Group>
                </div>
              </Row>
              <Row className='mb-3'>
                <div className='col-sm-6 mb-3'>
                  <Form.Group controlId='formGridPhone'>
                    <Form.Control
                      type='tel'
                      name='Phone'
                      onChange={handleInputs}
                      placeholder='Your Phone No'
                    />
                  </Form.Group>
                </div>
                <div className='col-sm-6'>
                  <select
                    name='department'
                    onChange={handleInputs}
                    style={{ appearance: 'auto' }}
                    className=' form-control'
                    id='inputGroupSelect02'
                  >
                    <option defaultValue>Select Department</option>
                    <option value='Hair'>Hair</option>
                    <option value='Spa'>Spa</option>
                  </select>
                </div>
              </Row>
              <Row className='mb-3'>
                <div className='col-sm-6 mb-3'>
                  <DatePicker
                    name='dateValue'
                    selected={date}
                    onChange={(date) => setDate(date)}
                    dateFormat='dd/MM/yyyy hh:mm aa'
                    filterDate={isWeekday}
                    minDate={new Date()}
                    showTimeSelect
                    timeIntervals={15}
                    excludeTimes={[
                      setHours(
                        setMinutes(date, date.getMinutes()),
                        date.getHours()
                      ),
                    ]}
                  />
                </div>
              </Row>

              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Control
                  as='textarea'
                  rows={3}
                  name='description'
                  onChange={handleInputs}
                  placeholder='What service would you like?'
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
          <div className='col-12 col-md-6 text-start py-4'>
            <div className='row'>
              <div className='col-6'>
                <div className='card  mb-2'>
                  <div className='card-header'>Beauty Hair And Spa</div>
                  <ul className='list-group list-group-flush'>
                    <li
                      className='list-group-item'
                      style={{ fontSize: '15px' }}
                    >
                      Thank you for your interest. For questions or comments,
                      please use the information listed here. We look forward to
                      hearing from you soon.
                    </li>
                  </ul>
                </div>

                <div className='card mb-2'>
                  <div className='card-header'>Address</div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <p style={{ fontSize: '15px' }}>
                        2221 Kennedy Road, Toronto, ON M1T 3G5 Free Parking
                        Available
                      </p>

                      <span style={{ fontSize: '15px' }}>
                        657 Valley Vista Drive, Vaughan, ON L6A 2E6 Free Parking
                        Available
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='card'>
                  <div className='card-header'>Phone</div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <a href='tel:+4162931111'>416.293.1111 (Toronto)</a>
                      <br />
                      <a href='tel:+4162931111'>416.293.1111 (Vaughan)</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-6'>
                <div className='card mb-2'>
                  <div className='card-header'>Service Area</div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <p>Serving Toronto & Vaughan</p>
                    </li>
                  </ul>
                </div>

                <div className='card mb-2'>
                  <div className='card-header'>Hours</div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <p>Tuesday, Thursday, Friday, 10 a.m. – 8 p.m.</p>
                      <p>Wednesday, 10 a.m. – 5 p.m.</p>
                      <p>Saturday, 9 a.m. – 6 p.m.</p>
                    </li>
                  </ul>
                </div>

                <div className='card'>
                  <div className='card-header'>
                    For After-Hours Appointments Call 416.402.0786
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
