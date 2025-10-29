import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstalledApp from '../Pages/InstalledApp/InstalledApp';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    loader:() => fetch('/AppData.json'),
    children: [
        {
            path: "/",
            Component: Home
        },
        {
          path: '/apps',
          Component: AllApps
        },
        {
          path: '/appDetails/:id',
          Component: AppDetails
        },
        {
          path: '/installation',
          Component: InstalledApp
        }
    ]
  },
]);