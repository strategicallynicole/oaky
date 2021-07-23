/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 10:31:53
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectOne from "../../elements/project/projectOne"

const Project = () => (
    <div className="rn-portfolio-area pt--200 pb--150 bg-color-grey portfolio-style-1">
        <div className="container">
            <div className="row mb--10">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="title">
                            {Title}
                            <span className="bg">Portfolio</span>
                        </h3>
                    </div>
                </div>
            </div>
            <ProjectOne />
            <div className="row">
                <div className="col-lg-12">
                    <div className="button-group mt--60 justify-content-center">
                        <a className="rn-button" href="#downloadbutton"><span>View All Works</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Project
