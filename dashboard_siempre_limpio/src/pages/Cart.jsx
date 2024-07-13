import React, { useContext } from 'react'
import '../assets/css/cartProducts.css'
import imgLogo from '../assets/images/logo.png'
import ProductCardCart from '../components/cartComponents/ProductCardCart'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import { Link } from 'react-router-dom'

function Cart() {

    const { cartData, fetchCartData } = useContext(GlobalContext)

    // const [cartData, setCartData] = useState([])

    useEffect(() => {
        fetchCartData()
    }, [])

    console.log(cartData);

    if (cartData.length < 1) {
        return (
            <div>Loading</div>
        )
    } else {


        return (
            <>
                <div className='imgLogo'><img src={imgLogo} alt="logo" /></div>
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
                                id={p.id} />
                        })}
                        {/* <div className='cardProductCart'>
                            <div className='productDetailCart'>
                                <img src={cartProdImg} alt="" />
                                <div className='infoProduct'>
                                    <span id='nameProdCart'>Nombre del producto</span>
                                    <span id='categoryProdCart'>Categoria</span>
                                    <span id='removeProdCart'>Quitar</span>
                                </div>
                            </div>
                            <div className='quantityCount'>
                                <i className="fa-solid fa-plus"></i>
                                <span>1</span>
                                <i className="fa-solid fa-minus"></i>
                            </div>
                            <div className='pricesCart'>
                                <span>$1200</span>
                            </div>
                            <div className='pricesCart'>
                                <span>$1200</span>
                            </div>
                        </div> */}
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