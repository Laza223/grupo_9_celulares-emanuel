import React from 'react'
import adminImg from '../assets/images/adminImg.png'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'



function TopBar() {
	return (
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
			<div className='logoImageContainer'>
				<img className='logoImage' src={logo} alt="logo" />
			</div>
			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
			</button>
			<ul className="navbar-nav ml-auto">
				<div className="topbar-divider d-none d-sm-block"></div>
				<li className="nav-item dropdown no-arrow">
					<Link className="nav-link dropdown-toggle" to="/admin" id="userDropdown">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">Perfil Admin</span>
						<img className="img-profile rounded-circle" src={adminImg} alt="Jordan Walke - Creador de React" width="60" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default TopBar;




