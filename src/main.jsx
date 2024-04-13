import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import MyCart from "./Components/MyCart.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import Register from "./Register/Register.jsx";
import LogIn from "./LogIn/LogIn.jsx";
import AuthProvider from "./AuthContext/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import ProductsList from "./Components/ProductsList.jsx";
import UpdateProduct from "./Components/UpdateProduct.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://10th-assignment-server-tau.vercel.app/product"),
      },

      {
        path: "/Product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://10th-assignment-server-tau.vercel.app/product/myCart"),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://10th-assignment-server-tau.vercel.app/product/details/${params.id}`),
      },
      {
        path: "/product/list",
        element: (
          <PrivateRoute>
            <ProductsList></ProductsList>
          </PrivateRoute>
        ),
        loader: () => fetch("https://10th-assignment-server-tau.vercel.app/product"),
      },
      {
        path: `/update/product/:id`,
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://10th-assignment-server-tau.vercel.app/product/details/${params.id}`),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
