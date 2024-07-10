import React from 'react'
import '../assets/css/error.css'

function ErrorAuth() {
  return (
    <div className="error-HTML-body">
    <div className="section-error">
        <h1 className="error">404</h1>
        <div className="page">Uuups!!! No se pudo encontrar la página que estabas buscando</div>
        <a className="back-home" href="/">Volver a Inicio</a>
    </div>
</div>
  )
}

export default ErrorAuth