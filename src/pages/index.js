/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 04:43:30
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from "react"
import Layout from "../components/layout"
import { MetaData } from '../components/common/meta'

import Banner from "../components/Banner"
import About from "../components/About"
import PartnerLogos from "../components/PartnerLogos"
import News from "../components/PostCard/feed"
import Services from "../components/Services/Services"
import Model from "../components/Strategy/model"
import Clients from '../components/Clients/composer'
const IndexPage = ({ location }) => (
    <>

<MetaData
                location={location}
                type="site"
            />
        <Layout>
            <section id="Banner" className="w-full px-10 py-10 xl:px-10 lg:px-10 md:px-10"><Banner /></section>

            <section id="About" className="w-full px-10 py-10 xl:px-10 lg:px-10 md:px-10"><About /></section>
            <section id="Services" className="w-full px-10 py-10 xl:px-10 lg:px-10 md:px-10"><Services /></section>
            <section id="Clients" className="w-full px-10 py-10 xl:px-10 lg:px-10 md:px-10"><Clients /></section>
            <section id="Blogs" className="w-full px-10 py-10 mx-10"><News /></section>

        </Layout>
    </>
)
export default IndexPage

