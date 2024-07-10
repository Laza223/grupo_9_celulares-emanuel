import React from 'react'
import CardProduct from '../components/homeComponents/CardProduct'
import '../assets/css/homeProduct.css'
import imgLogo from '../assets/images/logo.png'
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


function Home() {

    const [user, SetUser] = useState(null)

    const cookieValueSession = Cookies.get('sesionInfo')

    let [products, setProducts] = useState([])
    const { cartData, fetchCartData } = useContext(GlobalContext)

    const urlApiProducts = 'http://localhost:3030/api/products'
    const urlApiImage = 'http://localhost:3030/api/products/image/'

    useEffect(()=>{}, [user])


    useEffect(() => {

        if (cookieValueSession) {
            SetUser(jwtDecode(JSON.parse(cookieValueSession).token))
        }

        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
        fetchCartData()
    }, [])

    const logout = () => {
        Cookies.remove("sesionInfo")
        SetUser(null)
    }

    const prods = products.products || []
    // console.log(products.products);
    // console.log(cartData);
    console.log(user);


    return (
        <div className='bodyHome'>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce />
            <div className='header-container'>
                <nav className='nav-header-left'>
                    <ul className=''>
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link>CATEGORIAS</Link></li>
                        <li><Link>OFERTAS</Link></li>
                    </ul>
                </nav>
                <img src={imgLogo} alt="logo" />
                <nav className='nav-header-right'>
                    {/* <Link>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link> */}
                    {!user ?
                        <Link to="/authentication">
                            <i className="fa-regular fa-user"></i>
                            <span>Ingresar</span>
                        </Link>
                        :
                        <>
                            <Link style={{ display: "flex", alignItems: "center" }}>
                                <i className="fa-solid fa-circle" style={{ color: "limegreen", fontSize: "14px" }}></i>
                                <span>{user.name}</span>
                            </Link>
                            <Link onClick={logout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </Link>
                        </>
                    }
                    <Link to="/carrito">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Carrito</span>
                    </Link>
                </nav>
            </div>
            <div className='cardsContainer'>
                {prods.map(m => {
                    return <CardProduct id={m.id} key={m.id} title={m.name} description={m.description} img={urlApiImage + m.image} price={m.price} />
                })}
            </div>
            <Link className='cartButton' to="/carrito">
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                <span>{cartData.products?.length}</span>
            </Link>
        </div>
    )
}

export default Home