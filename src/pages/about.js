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
import Meeting from '../components/Meeting'
import Alarmed from '../components/Illustrations/Schedule'
import Quiz from '../components/Quiz'
import Definition from '../components/Definition'
import BusinessMan from '../components/Illustrations/Businessman'
import Title from '../components/Titles/h1.js'
import Counter from '../components/counter'
/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
`use strict`
const About = ({ location }) => (

    <>

        <Layout>
            <MetaData location={location} />

            <section className="w-full lg:px-30 lg:mx-28">
               <div className="ml-10"> <Title
                    className="pt-10 lg:px-10 wow slideInRight"
                    data-wow-delay="0s"
                    bgtext="Do You Like Us? Yes/No (circle one)"
                    titletext="About Us"
                /></div>
                <div className="flex flex-wrap overflow-hidden">

                    <div className="w-full gap-1 pt-20 ml-20 mr-20 overflow-hidden wow sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 slideInRight"
                        data-wow-delay="2s">
                        <Definition />

                    </div>

                    <div className="w-full pt-10 overflow-hidden lg:gap-1 lg:ml-20 lg:mr-20 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 wow slideInRight"
                        data-wow-delay="1s">
                        <BusinessMan />

                    </div>

                </div>
                {/* The main page content */}

            </section>

            <section className="w-full px-10 lg:px-28 wow slideInRight"
                data-wow-delay="1s">
                <Quiz /></section>
            <section className="w-full lg:px-28 wow slideInRight"
                data-wow-delay="1s"><Counter />
            </section>

        </Layout>
    </>
)

export default About

