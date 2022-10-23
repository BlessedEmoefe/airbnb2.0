import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import './index.css';
import Navigation from './infrastructure/navigation/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Navigation} />
  </React.StrictMode>
);
