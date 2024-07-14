import React, { useContext } from 'react'
import '../assets/css/cartProducts.css'
import ProductCardCart from '../components/cartComponents/ProductCardCart'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";

function Cart() {

    const { cartData, fetchCartData } = useContext(GlobalContext)
    const cookieValueSession = Cookies.get('sesionInfo')
    const [user, SetUser] = useState(null)
    const [authFailed, SetAuthFailed] = useState(false)


    useEffect(() => {
        if (cookieValueSession) {
            SetUser(jwtDecode(JSON.parse(cookieValueSession).token))
        } else {
            SetAuthFailed(true)
        }
    }, [])

    useEffect(() => {
        if (user) {
            console.log(user);
            fetchCartData(user.id)
        }
    }, [user, fetchCartData])

    if (authFailed) {
        return (
            <>
            <Header user={user} />
            <div className='cartErrorAuth'>
                <h1>Debe loguearse pare ver el carrito</h1>
                <Link to={"/authentication"}>ingresar</Link>
            </div>
            </>
        )
    }

    if (!cartData) {
        return (
            <div>Loading</div>
        )
    } else {
        return (
            <>
                <Header user={user} />
                {/* {!user ?
                    <div className='cartErrorAuth'>
                        <h1>Debe loguearse pare ver el carrito</h1>
                        <Link to={"/authentication"}>ingresar</Link>
                    </div>
                    : */}
                    <div className='cartBody'>
                        <div className='cartCardsContainer'>
                            <div className='headerCart'>
                                <h1>Mi carrito</h1>
                                <h3>{cartData.products.length} Items</h3>
                                <nav>
                                    <span id='cartNameProduct'>Detalles de producto</span>
                                    <span>Cantidad</span>
                                    <span>Precio</span>
                                    <span>Total</span>
                                </nav>
                            </div>
                            {cartData.products.map(p => {
                                return <ProductCardCart key={p.id}
                                    name={p.name}
                                    price={p.price}
                                    quantity={p.Orderproducts.quantity}
                                    categoryId={p.categoryId}
                                    img={p.image}
                                    id={p.id} user={user} />
                            })}
                            <div className='footerCardContainer'>
                                <Link to="/home" className='backHomeCart'>
                                    <i className="fa-solid fa-arrow-left-long"></i>
                                    Continuar Comprando
                                </Link>
                                <div>
                                    <span>TOTAL: ${cartData.total}</span>
                                    <button>FINALIZAR COMPRA</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default Cart