import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import CreateNewGrant from './screens/CreateNewGrant';
import React from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="landing_page" element={<LandingPage />} />
      <Route path="create_new_grant" element={<CreateNewGrant />} />
    </Route>
  )
);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}

export default App;
