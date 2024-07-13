import React from 'react'
import { useEffect, useState, useContext, createContext } from 'react';

export const GlobalContext = createContext()


function GlobalProvider ({ children }) {

    const [cartData, setCartData] = useState([])

    const fetchCartData = () => {
        fetch("http://localhost:3030/api/cart/?userId=2")
            .then(response => response.json())
            .then(data => setCartData(data.data))
    }

    return (
        <GlobalContext.Provider value={{cartData, fetchCartData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider