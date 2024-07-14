import React from 'react'
import { useEffect, useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


export const GlobalContext = createContext()


function GlobalProvider({ children }) {

    const [user, SetUser] = useState(null)
    const cookieValueSession = Cookies.get('sesionInfo')

    useEffect(() => {
        if (cookieValueSession) {
            SetUser(jwtDecode(JSON.parse(cookieValueSession).token))
        }
    }, [])
    const [cartData, setCartData] = useState(null)

    const fetchCartData = (id) => {
        if (id) {
            fetch(`http://localhost:3030/api/cart/?userId=${id}`)
            .then(response => response.json())
            .then(data => setCartData(data.data))
        }
    }

    return (
        <GlobalContext.Provider value={{ cartData, fetchCartData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider