import React from 'react'
import CardProduct from '../components/homeComponents/CardProduct'
import '../assets/css/homeProduct.css'
import imgLogo from '../assets/images/logo.png'
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';



function Home() {

    let [products, setProducts] = useState([])
    const { cartData, fetchCartData } = useContext(GlobalContext)

    const urlApiProducts = 'http://localhost:3030/api/products'
    const urlApiImage = 'http://localhost:3030/api/products/image/'


    useEffect(() => {
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
        fetchCartData()
    }, [])

    const prods = products.products || []
    /* console.log(products.products); */
   /*  console.log(cartData); */


    return (
        <div>
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
            transition: Bounce/>
            <div className='imgLogo'><img src={imgLogo} alt="logo" /></div>
            <div className='cardsContainer'>
                {prods.map(m => {
                    return <CardProduct id={m.id} key={m.id} title={m.name} description={m.description} img={urlApiImage + m.image} />
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