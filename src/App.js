import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Container/Website/Components/Home/Home';
import Service from './Container/Website/Components/Service/Service';
import Packages from './Container/Website/Components/Packages/Packages';
import SarynaKey from './Container/Website/Components/SarynaKey/SarynaKey';
import SarynaKeyDetails from './Container/Website/Components/SarynaKeyDetails/SarynaKeyDetails';
import Kerastase from './Container/Website/Components/Kerastase/Kerastase';
import KerastaseDetails from './Container/Website/Components/KerastaseDetails/KerastaseDetails';
import HairTools from './Container/Website/Components/HairTools/HairTools';
import HairToolsDetails from './Container/Website/Components/HairToolsDetails/HairToolsDetails';
import Contact from './Container/Website/Components/Contact/Contact';
import Login from './Container/Website/Components/Login/Login';
import SignUp from './Container/Website/Components/SignUp/SignUp';

import { createContext } from 'react';

import PrivateRoute from './Container/Website/Components/PrivateRoute/PrivateRoute';
import useFirebase from './hook/useFirebase';
import Admin from './Container/Admin/Admin';
import ProductsAdd from './Container/Admin/Components/ProductsAdd/ProductsAdd';
import ServiceAdd from './Container/Admin/Components/ServiceAdd/ServiceAdd';
import SarynaKeyAdd from './Container/Admin/Components/ProductsAdd/SarynaKeyAdd';
import KerastaseAdd from './Container/Admin/Components/ProductsAdd/KerastaseAdd';
import HairToolsAdd from './Container/Admin/Components/ProductsAdd/HairToolsAdd';
import PackageEdit from './Container/Admin/Components/Packages/PackageEdit';

export const Authcontext = createContext();
function App() {
  const allContext = useFirebase();
  return (
    <Authcontext.Provider value={allContext}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='service' element={<Service />} />
            <Route path='packages' element={<Packages />} />
            <Route path='sarynaKey' element={<SarynaKey />} />
            <Route
              path='sarynaKey/:sarynaKeyPd'
              element={
                <PrivateRoute>
                  <SarynaKeyDetails />
                </PrivateRoute>
              }
            />
            <Route path='kerastase' element={<Kerastase />} />
            <Route
              path='kerastase/:kerastasePd'
              element={
                <PrivateRoute>
                  <KerastaseDetails />
                </PrivateRoute>
              }
            />
            <Route path='hairTools' element={<HairTools />} />
            <Route
              path='hairTools/:hairToolsPd'
              element={
                <PrivateRoute>
                  <HairToolsDetails />
                </PrivateRoute>
              }
            />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='admin' element={<Admin />} />
            <Route path='admin/productsadd' element={<ProductsAdd />}>
              <Route path='sarynaKeyAdd' element={<SarynaKeyAdd />} />
              <Route path='kerastaseAdd' element={<KerastaseAdd />} />
              <Route path='hairToolsAdd' element={<HairToolsAdd />} />
            </Route>
            <Route path='admin/packages' element={<Admin />} />
            <Route path='admin/packages/:packageID' element={<PackageEdit />} />

            <Route path='admin/serviceadd' element={<ServiceAdd />} />
          </Routes>
        </div>
      </Router>
    </Authcontext.Provider>
  );
}

export default App;
