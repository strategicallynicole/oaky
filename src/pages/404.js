/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 04:49:20
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from "react";
import Layout from "../components/layout"
import Client from "../components/client"

const NotFoundPage = () => (
  <Layout>
    <Client />
    <div className="error-page-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner">
                        <h1 className="theme-color">404</h1>
                        <h2>Page Not Found</h2>
                        <p>Sorry, but the page you are looking for was moved, removed, renamed or might never existed...</p>
                        <a className="rn-button" href="/">Go Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)
export default NotFoundPage


