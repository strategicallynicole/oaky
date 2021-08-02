/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 18:56:32
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { MetaData } from '../components/common/meta'
import Title from '../components/Titles/h1'
import Schedule from '../components/Meeting/schedule'
import Alarmed from '../components/Illustrations/Schedule/index.js'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
`use strict`
const Page = ({ location }) => (
    <>

        <Layout>
            <MetaData location={location} />


            <section className="mx-16">

            <div class="flex flex-wrap -mx-4 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-3 xl:-mx-4">
            <Title titletext="Schedule A Consultation" bgtext="Schedule" />


<div className="w-full px-4 my-4 overflow-hidden sm:my-4 sm:px-4 sm:w-full md:my-4 md:px-4 md:w-full lg:my-3 lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
<Schedule />

</div>

<div className="w-full px-4 my-4 overflow-hidden sm:my-4 sm:px-4 sm:w-full md:my-4 md:px-4 md:w-full lg:my-3 lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
<Alarmed />


</div>

</div>


                {/* The main page content */}

            </section>          </Layout>
    </>
)

export default Page

