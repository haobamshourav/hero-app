import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader:() => fetch('/public/AppData.json'),
            path: "/",
            Component: Home
        },
        {
          path: '/apps',
          Component: AllApps
        },
        {
          path: '/appDetails/:id',
          loader:() => fetch('/public/AppData.json'),
          Component: AppDetails
        }
    ]
  },
]);