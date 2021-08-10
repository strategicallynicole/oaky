/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 05:38:56
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from "react"
import PropTypes from "prop-types"
import Client from "./client"
import Nav from "./header/tw"
import Footer from "./footer/perm"
import '../scss/style.scss'
import '../styles/base.css'
import ProspectIO from './tracking'
import GoogleAnalytics from './tracking'

const Layout = ({ children }) => (

    <>


            <Nav>



            <Client />

            <main>{children}</main>
            <Footer />
            </Nav>
            <ProspectIO />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
