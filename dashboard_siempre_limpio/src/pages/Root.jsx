import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import '../assets/app.css'

function Root() {
    return (
        <React.Fragment>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar />
                        <Outlet/>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Root