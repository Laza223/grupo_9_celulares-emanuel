import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
function ActionCard({name, href, icon }) {
    return (
        <li className="nav-item">
            <Link className="nav-link collapsed" to={href}>
                <i className={icon}/>
                <span>{name}</span>
            </Link>
        </li>
    )
}

// ActionCard.defaultProps = {
//     name: "ActionCard",
//     href: "/none",
//     icon: "fas fa-fw fa-folder"
// }

// ActionCard.PropTypes = {
//     name: PropTypes.string,
//     href: PropTypes.string,
//     icon: PropTypes.string
// }



export default ActionCard