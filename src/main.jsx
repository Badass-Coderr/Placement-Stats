import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Dashboared from '../HomePageComponent/Dashboared.jsx';
import Job from '../HomePageComponent/Job.jsx';
import Homepage from '../HomePageComponent/Homepage.jsx';
import MainHomePage from '../HomePageComponent/MainHomePage.jsx';
import Fag from '../HomePageComponent/Faq.jsx';
import PlacementPage from '../HomePageComponent/PlacementPage.jsx';
import ComingSoon from '../HomePageComponent/ComingSoon.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element: <MainHomePage />,
      },
      {
        path: 'placement', 
        element: <Homepage  />,
      },
      {
        path: 'jobs',
        element: <Job />,
      },
      {
        
        path: 'pl',
        element: <PlacementPage />,
      },
      {
        
        path: 'ComingSoon',
        element: <ComingSoon />,
      },
      {
        
        path: 'faq',
        element: <Fag />,
      },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider to pass the router */}
  </StrictMode>
);
