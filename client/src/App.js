import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CreateNewGrant from './screens/CreateNewGrant';
import React from 'react';
import GovLandingPage from './screens/GovLandingPage';
import AllGrantsPage from './screens/AllGrantsPage';
import GrantDetails from './screens/GrantDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="gov_landing_page" element={<GovLandingPage />} />
      <Route path="create_new_grant" element={<CreateNewGrant />} />
      <Route path="all_grants_page" element={<AllGrantsPage />} />
      <Route path="grant_details" element={<GrantDetails />} />
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
