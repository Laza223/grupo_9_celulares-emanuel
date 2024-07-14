import React from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../assets/images/logo.png'
import Cookies from 'js-cookie'


function Header({ user }) {

    const logout = () => {
        Cookies.remove("sesionInfo")
        SetUser(null)
    }

    return (
        <div className='header-container'>
            <nav className='nav-header-left'>
                <ul className=''>
                    <li><Link to="/home">HOME</Link></li>
                    {/* <li><Link>CATEGORIAS</Link></li>
                    <li><Link>OFERTAS</Link></li> */}
                </ul>
            </nav>
            <img src={imgLogo} alt="logo" />
            <nav className='nav-header-right'>
                {/* <Link>
            <i className="fa-solid fa-magnifying-glass"></i>
        </Link> */}
                {!user ?
                    <>
                        <Link to="/authentication">
                            <i className="fa-regular fa-user"></i>
                            <span>Ingresar</span>
                        </Link>
                        <Link to="/authentication">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Carrito</span>
                        </Link>
                    </>
                    :
                    <>
                        {user.roleId == 2 ?
                            <Link to={"/admin"} style={{ display: "flex", alignItems: "center" }}>
                                <span>Panel Admin</span>
                            </Link>
                            : ""}
                        <Link style={{ display: "flex", alignItems: "center" }}>
                            <i className="fa-solid fa-circle" style={{ color: "limegreen", fontSize: "14px" }}></i>
                            <span>{user.name}</span>
                        </Link>
                        <Link onClick={logout} style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <h5 style={{padding: "5px", margin: "initial"}}>Salir</h5>
                        </Link>
                        <Link to="/carrito">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Carrito</span>
                        </Link>
                    </>
                }

            </nav>
        </div>
    )
}

export default Header
