import React from 'react'
import CardProduct from '../components/homeComponents/CardProduct'
import '../assets/css/homeProduct.css'
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import Header from '../components/Header';
import Cookies from 'js-cookie'


function Home() {

    const [user, SetUser] = useState(null)

    const cookieValueSession = Cookies.get('sesionInfo')

    let [products, setProducts] = useState([])
    const { cartData, fetchCartData } = useContext(GlobalContext)
    console.log(user);

    const urlApiProducts = 'http://localhost:3030/api/products'
    const urlApiImage = 'http://localhost:3030/api/products/image/'

    useEffect(() => { }, [user])


    useEffect(() => {

        if (cookieValueSession) {
            SetUser(jwtDecode(JSON.parse(cookieValueSession).token))
        }
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
        if (user) {
            fetchCartData(user.id)
        }

    }, [])

    const prods = products.products || []
    // console.log(products.products);
    // console.log(cartData);
    // console.log(user);


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
            <Header user={user} />
            <div className='cardsContainer'>
                {prods.map(m => {
                    return <CardProduct id={m.id} key={m.id} title={m.name} description={m.description} img={urlApiImage + m.image} price={m.price} user={user} />
                })}
            </div>
            {cartData ?
                <Link className='cartButton' to="/carrito">
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    <span>{cartData.products?.length}</span>
                </Link>
                : ""
            }
        </div>
    )
}

export default Home