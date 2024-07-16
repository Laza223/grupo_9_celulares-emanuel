import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from '../pages/Root';
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import EditProduct from '../pages/EditProduct'
import CreateProduct from '../pages/CreateProduct';
import Users from "../pages/Users";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import Authentication from "../pages/Authentication";
import ProtectedRoute from "../components/middlewareComponents/ProtectedRoute";
import ErrorAuth from "../pages/ErrorAuth";

//  Hacer peticion a la API y setear la info en un Context, y crear condicionales para opcion de renderizado, 
//  pasando el componente a asegurar como Children del componente que hace de middleware

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <ProtectedRoute><Root /></ProtectedRoute>,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/edit/:id",
                element: <EditProduct />
            },
            {
                path: "products/create",
                element: <CreateProduct />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "orders",
                element: <Orders />
            },
            {
                // path: "/", colocar direccion de ruta (parte de "/")
                // element: </> colocar componente a enviar a <Outlet/>
            },
            {
                //    path: "/", colocar direccion de ruta (parte de "/")
                //     element: </> colocar componente a enviar a <Outlet/>
            }
        ],
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/carrito",
        element: <Cart />,
    },
    {
        path: "/authentication",
        element: <Authentication />
    },
    {
        path: "/error-auth",
        element: <ErrorAuth/>
    }
])

export const Router_Provider = () => <RouterProvider router={router} />
