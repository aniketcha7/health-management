import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import PatientsList from './Components/Admin/PatientsList/PatientsList';
import DoctorList from './Components/Admin/DoctorList/DoctorList';

function App() {

 const router = createBrowserRouter([{

path: '/',
element : <MainComponent /> ,
children :[
{
  path :'/Dashboard',
  element: <Dashboard />
},
{
  path:'/DoctorList',
  element:<DoctorList />
},
{
  path:'/PatientList',
  element:<PatientsList />
},
]
}]);

  return (
    <div>
    <RouterProvider router ={router} />
    </div>
    
  );
}

export default App;
