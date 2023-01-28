import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import NotFoundErrorPage from './NotFoundErrorPage/NotFoundErrorPage';
import Meet from './Meet/Meet';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundErrorPage />
    },
    {
      path: "/meet",
      element: <Meet />
    },
    {
      path: "/meet/:roomId",
      element: <Meet />
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
