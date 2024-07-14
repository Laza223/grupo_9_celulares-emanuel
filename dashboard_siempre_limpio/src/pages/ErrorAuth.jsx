import React from 'react'
import '../assets/css/error.css'
import { Link } from 'react-router-dom'

function ErrorAuth() {
  return (
    <div className="error-HTML-body">
    <div className="section-error">
        <h1 className="error">ERROR</h1>
        <div className="page">No posee permisos para acceder a esta ruta</div>
        <Link className="back-home" to="/home">Volver a Inicio</Link>
    </div>
</div>
  )
}

export default ErrorAuth