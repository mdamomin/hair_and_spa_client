import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const PackageEdit = () => {
  const { packageID } = useParams();

  const [packageData, setPackageData] = useState({});
  const [editData, setEditData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  let initialData = {
    PackageID: packageData._id,
    PackageName: packageData.name,
    PackagePrice: packageData.price,
    Time: packageData.time,
  };
  packageData?.category?.map((pkCt, index) => {
    const name = `PackageCategory_${index + 1}`;
    const value = pkCt;
    initialData = { ...initialData };
    initialData[name] = value;
  });

  const handleOption = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...editData };
    newData[name] = value;
    setEditData(newData);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageID}`)
      .then((response) => response.json())
      .then((data) => {
        setPackageData(data);
        setEditData(initialData);
        setIsLoading(true);
      });
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/packages/${packageID}`, editData)
      .then((response) => {
        if (response.data.acknowledged) {
          alert('Package data updated successfully');
        }
      });
  };
  return (
    <div>
      <Sidebar></Sidebar>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-sm-4 pt-5'>
            <h3>Package Edit Dashboard</h3>
            <form onSubmit={handleSubmit}>
              <input
                className=' form-control mb-2'
                type='text'
                defaultValue={packageData._id}
                name='PackageID'
                disabled
              />
              <input
                className=' form-control mb-2'
                type='text'
                defaultValue={packageData.name}
                name='PackageName'
                onChange={handleOption}
              />
              <input
                className=' form-control mb-2'
                type='number'
                defaultValue={packageData.price}
                name='PackagePrice'
                onChange={handleOption}
              />
              {packageData.time && (
                <input
                  className=' form-control mb-2'
                  type='number'
                  step='0.01'
                  defaultValue={packageData.time}
                  name='Time'
                  onChange={handleOption}
                />
              )}

              {packageData?.category?.map(
                (singleCG, index) =>
                  singleCG && (
                    <input
                      key={index}
                      className=' form-control mb-2'
                      type='text'
                      defaultValue={singleCG}
                      name={`PackageCategory_${index + 1}`}
                      onChange={handleOption}
                    />
                  )
              )}
              <Button variant='primary' type='submit'>
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageEdit;
