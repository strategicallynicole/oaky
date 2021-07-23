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
import Meeting from '../components/Meeting'
import Alarmed from '../components/Illustrations/Schedule'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = () => {

    return (
        <>


            <Layout>
                <section className="ml-20 mr-20">
            <Title titletext="Schedule A Consultation" bgtext="Schedule" />

                  <div className="flex flex-wrap overflow-hidden">


<div className="w-full gap-1 pt-20 ml-1 mr-1 overflow-hidden xl:ml-20 xl:mr-20 sm:w-full lg:w-1/2 xl:w-1/2">

<div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/n18/oakwave-consultation?embed=true"></div>
<div
                            className="content-body load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: null }}
                        />
                         <Helmet>
    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>

            </Helmet>

</div>


<div class="w-full mr-20 ml-20 overflow-hidden gap-1 pt-60 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
<Alarmed />

            </div>


</div>
                        {/* The main page content */}

                        </section>          </Layout>
        </>
    )
}

export default Page


