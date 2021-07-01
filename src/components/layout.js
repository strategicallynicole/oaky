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
import React from "react";
import PropTypes from "prop-types";
import Client from "./client";
import Nav from "../components/header/nav";
import Footer from "../components/footer/footer";
import '../scss/style.scss';
import '../styles/base.css';

const Layout = ({ children }) => {
  return (
    <div className="main-wrapper active-dark bg-black-gradient">
        <Client />
        <Nav />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
