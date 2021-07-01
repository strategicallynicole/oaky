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
import About from "../components/homedefault/about";
import Service from "../components/homedefault/service";
import Brand from "../components/Brand";
import Blogs from "../components/blogPost";

//import Project from "../components/homedefault/project";
//import Testimonial from "../components/homedefault/testimonial";



const IndexPage = () => (
  <Layout>
    <Banner />
    <About />
    <Service />
<Brand />
<Blogs />
  </Layout>
)
export default IndexPage;
