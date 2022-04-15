import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/services'}/>}/>
      <Route path='/services' element={<ServiceList />}/>
      <Route path='/services/:id' element={<Service />} />
    </Routes>
  );
};
