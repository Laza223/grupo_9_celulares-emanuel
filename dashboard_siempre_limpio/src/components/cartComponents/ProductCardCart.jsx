import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'

function ProductCardCart({ name, price, categoryId, quantity, img, id }) {

    const [categorys, setCategorys] = useState([]);
    const { cartData, fetchCartData } = useContext(GlobalContext)


    const urlApiImage = 'http://localhost:3030/api/products/image/'
    const urlApiCategorys = 'http://localhost:3030/api/categorys';

    useEffect(() => {
        fetch(urlApiCategorys)
            .then(response => response.json())
            .then(data => setCategorys(data.data));

    }, []);

    const categoryFind = categorys.find(c => c.id == categoryId)

    const handleClickRemove = (id) => {
        fetch(`http://localhost:3030/api/cart/remove/${id}?userId=2`, { method: 'PATCH' })
            .then(response => response.json())
            .then(data => fetchCartData())
    }

    const handleClickMoreQuantity = (id) => {
        fetch(`http://localhost:3030/api/cart/more/${id}?userId=2`, { method: 'PATCH' })
            .then(response => response.json())
            .then(data => fetchCartData())

    }

    const handleClickLessQuantity = (id) => {
        fetch(`http://localhost:3030/api/cart/less/${id}?userId=2`, { method: 'PATCH' })
            .then(response => response.json())
            .then(data => fetchCartData())
    }

    // console.log(categoryFind);

    // console.log(categoryId);


    return (
        <div className='cardProductCart'>
            <div className='productDetailCart'>
                <img src={urlApiImage + img} alt={`image-${name}`} />
                <div className='infoProduct'>
                    <span id='nameProdCart'>{name}</span>
                    <span id='categoryProdCart'>{categoryFind?.name}</span>
                    <span id='removeProdCart'
                        onClick={() => handleClickRemove(id)}
                    >Quitar</span>
                </div>
            </div>
            <div className='quantityCount'>
                <i className="fa-solid fa-plus"
                    onClick={() => handleClickMoreQuantity(id)}></i>
                <span>{quantity}</span>
                <i className="fa-solid fa-minus"
                onClick={() => handleClickLessQuantity(id)}></i>
            </div>
            <div className='pricesCart'>
                <span>${price}</span>
            </div>
            <div className='pricesCart'>
                <span>${price * quantity}</span>
            </div>
        </div>
    )
}

export default ProductCardCart