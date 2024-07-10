import * as React from 'react';
import ContainCategoryCards from '../components/ContainCategoryCards';
import TotalsCards from '../components/TotalsCards';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

function Dashboard() {
  let [totalProducts, setTotalProducts] = useState({ count: 0, products: [] });
  let [categorys, setCategorys] = useState([]);
  let [totalUsers, setUsers] = useState({ count: 0, users: [] });
  // const {token} = useParams()

  // setToken(token)

  const urlApiProducts = 'http://localhost:3030/api/products';
  const urlApiCategorys = 'http://localhost:3030/api/categorys';
  const urlApiUsers = 'http://localhost:3030/api/users';

  useEffect(() => {
    fetch(urlApiProducts)
      .then(response => response.json())
      .then(data => setTotalProducts(data));
  }, []);

  useEffect(() => {
    fetch(urlApiCategorys)
      .then(response => response.json())
      .then(data => setCategorys(data));
  }, []);

  useEffect(() => {
    fetch(urlApiUsers)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const metrics = [
    {
      color: "success",
      title: "Total de productos",
      count: totalProducts.count,
      icon: "fa-solid fa-box"
    },
    {
      color: "success",
      title: "Total de usuarios",
      count: totalUsers.count,
      icon: "fa-solid fa-user"
    },
    {
      color: "success",
      title: "Total de Categorias",
      count: categorys.data?.length,
      icon: "fa-solid fa-list"
    }
  ];

  if (categorys.length < 1 || totalProducts.products.length < 1 || totalUsers.users.length < 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <CircularProgress color="inherit" />
      </div>
    );
  } else {
    const lastUser = totalUsers.users[totalUsers.users.length - 1];
    const lastProduct = totalProducts.products[totalProducts.products.length - 1];

    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Panel Administrador: SIEMPRE LIMPIO</h1>
        </div>

        <div className="row">
          {metrics.map(m => {
            return <TotalsCards key={m.title} color={m.color} title={m.title} count={m.count} icon={m.icon} />;
          })}
        </div>

        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
          <div className="row" style={{ display: 'flex', flexDirection: 'column', width: '45%', margin: '20px' }}>
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">Último usuario creado</h5>
                </div>
                <div className="card-body">
                  <div className="text-center">

                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '10rem' }} src={`http://localhost:3030/images/users/${lastUser.avatar}`} alt="Usuario" />
                  </div>
                  <p><strong>id:</strong> {lastUser.id}</p>
                  <p><strong>Nombre:</strong> {lastUser.name}</p>
                  <p><strong>Apellido:</strong> {lastUser.surname}</p>
                  {/*  <a className="btn btn-primary" target="_blank" rel="nofollow" href={`http://localhost:3030/api/usuarios/${lastUser.id}`} >Ver detalles del usuario</a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '10rem' }} src={`http://localhost:3030/images/products/${lastProduct.image}`} alt="Producto" />
                  </div>
                  <p><strong>id:</strong> {lastProduct.id}</p>
                  <p><strong>Nombre:</strong> {lastProduct.name}</p>
                  <p><strong>Precio:</strong> {lastProduct.price}</p>
                  <p><strong>Stock:</strong> {lastProduct.stock}</p>
                  {/*   <a className="btn btn-primary" target="_blank" rel="nofollow"  href={`http://localhost:3030/api/products/${lastProduct.id}` }  >Ver detalles del producto</a> */}
                </div>
              </div>
            </div>
          </div>
          <ContainCategoryCards />
        </div>

      </div>
    );
  }
}

export default Dashboard;
