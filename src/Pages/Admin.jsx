import React from 'react';
import { useAuth } from '../AuthContext';
import './CSS/Admin.css';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddReferens from '../Components/AddReferens/AddReferens';
import ListReferens from '../Components/ListReferens/ListReferens';
import ListOffert from '../Components/ListOffert/ListOffert';

const Admin = () => {


  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addreferens' element={<AddReferens />} />
        <Route path='/listreferens' element={<ListReferens />} />
        <Route path='/listoffert' element={<ListOffert />} />
      </Routes>
    </div>
  );
};

export default Admin;