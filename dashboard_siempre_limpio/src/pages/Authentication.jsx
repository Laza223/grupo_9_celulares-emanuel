import React from 'react'
import '../assets/css/authentication.css'
import script from '../assets/js/auth/script'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom';


function Authentication() {

    const [errors, SetErrors] = useState("")

    const [userInfo, setUserInfo] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3030/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success === true) {
                    Cookies.set('sesionInfo', JSON.stringify(data))
                    navigate("/home")
                } else {
                    SetErrors(data.message)
                    console.log(errors);
                }


            })
            .catch(error => console.error('Error:', error));
    }

    console.log(errors);

    // console.log(userInfo);

    return (
        <>
            <div className="loginyregist">
                <div className="container-form register hide">
                    <div className="information">
                        <div className="info-childs">
                            <h2>Bienvenido</h2>
                            <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                            <input type="button" value="Iniciar Sesión" id="sign-in" />
                        </div>
                    </div>
                    <div className="form-information">
                        <div className="form-information-childs">
                            <h2>Crear una Cuenta</h2>
                            {/* <div className="icons">
                                <i className='bx bxl-google'></i>
                                <i className='bx bxl-facebook'>
                                    <a href="https://www.facebook.com/r.php" target="_blank" />
                                </i>
                                <i className='bx bxl-linkedin' ></i>
                            </div><br /> */}
                            {/* <p>o usa tu email para registrarte</p> */}
                            <form className="form form-register">
                                <div>
                                    <label>
                                        <i className='bx bx-user' ></i>
                                        <input type="text" placeholder="Nombre Usuario" name="userName" />
                                    </label>
                                </div>
                                <div>
                                    <label >
                                        <i className='bx bx-envelope' ></i>
                                        <input type="email" placeholder="Correo Electronico" name="userEmail" onChange={handleChange} />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <i className='bx bx-lock-alt' ></i>
                                        <input type="password" placeholder="Contraseña" name="userPassword" onChange={handleChange} />
                                    </label>
                                </div>

                                <input type="submit" value="Registrarse" />
                                <div className="alerta-error">Todos los campos son obligatorios</div>
                                <div className="alerta-exito">Te registraste correctamente</div>
                            </form>
                        </div>
                    </div>
                </div >


                <div className="container-form login">
                    <div className="information">
                        <div className="info-childs">
                            <h2>¡¡Bienvenido nuevamente!!</h2>
                            <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                            <input type="button" value="Registrarse" id="sign-up" />
                        </div>
                    </div>
                    <div className="form-information">
                        <div className="form-information-childs">
                            <h2>Iniciar Sesión</h2>
                            {/* <div className="icons">
                                <i className='bx bxl-google'></i>
                                <i className='bx bxl-github'></i>
                                <i className='bx bxl-facebook' ></i>
                            </div>
                            <br />
                            <p>o Iniciar Sesión con una cuenta</p> */}
                            <form className="form form-login" >
                                <div>
                                    <label >
                                        <i className='bx bx-envelope' ></i>
                                        <input type="email" placeholder="Correo Electronico" name="email" onChange={handleChange} />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <i className='bx bx-lock-alt' ></i>
                                        <input type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
                                    </label>
                                </div>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                <input type="submit" value="Iniciar Sesión" onClick={handleSubmit} />   
                                <span style={{color: "red"}}>{errors}</span>
                                </div>
                                <div className="alerta-error">Todos los campos son obligatorios</div>
                                <div className="alerta-exito">Iniciaste sesión correctamente</div>
                            </form>
                        </div>
                    </div>
                </div>
                <script >{script}</script>
            </div>
        </>

    )
}

export default Authentication