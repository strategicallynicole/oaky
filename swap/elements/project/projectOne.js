/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 14:23:10
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Projectcard from "./projectcard"

const ProjectOne = () => (
    <div className="row row--45 mt_dec--30">
        <Projectcard key={data.node.id}
            column="col-lg-4 col-md-6 col-12"
            portfolioStyle="portfolio-style-1"
            key={data.node.id}
            id={data.node.id}
            image={data.node.featured_image.childImageSharp}
            title={data.node.title}
            category={data.node.category}
        />
    </div>
)

export default ProjectOne
