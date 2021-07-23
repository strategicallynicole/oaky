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
import React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import About from "../components/About";
import PartnerLogos from "../components/PartnerLogos";
import Blogs from "../components/blogPost";
import Services from "../components/Services";
import Model from "../components/Strategy/model"
//import Project from "../components/homedefault/project";
//import Testimonial from "../components/homedefault/testimonial";
import Service from "../components/ServicesV2"

const IndexPage = () => (
<>
<Layout>
    <section id="Banner" className="w-full px-10 py-10"><Banner /></section>

    <section id="About" className="w-full px-10 py-10 pt-60 pb-60"><About /></section>
    <section id="Model" className="w-full px-10 py-10"><Model /></section>
    <section id="Services" className="w-full px-10 py-10"><Services /></section>
    <section id="Partners" className="w-full px-10 py-10"><PartnerLogos /></section>
    <section id="Blogs" className="w-full px-10 py-10"><Blogs /></section>
  </Layout>
  </>
)
export default IndexPage;
