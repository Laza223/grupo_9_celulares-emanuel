import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';


function ProtectedRoute({ children }) {

    const [access, setAccess] = useState(null)
    const [loading, setLoading] = useState(true)

    const cookieValueSession = Cookies.get('sesionInfo')

    const urlCheckAdmin = "http://localhost:3030/api/auth/admin-verify"

    useEffect(() => {

        if (!cookieValueSession) { 
            setAccess(false)
            setLoading(false)
        }
    
    let parsedToken = null

        if (cookieValueSession) {
            try {
                parsedToken = JSON.parse(cookieValueSession).token;
            } catch (error) {
                console.error('Error parsing token from cookie:', error);
            }
        }

        fetch(urlCheckAdmin, {
            method: 'post',
            headers: { Authorization: `Bearer ${parsedToken}` }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAccess(data.adminAccess)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (access === false) {
        return <Navigate to="/error-auth" />;
    }

    return children;


}

export default ProtectedRoute
