/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/06/2021 - 13:09:09
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/06/2021
 * - Author          :
 * - Modification    :
 **/
import React from 'react'
import RunAwayLittleGirl from '../Illustrations/RunAwayLittleGirl'
import Title from '../Titles/home.js'
import * as style from './banner.module.scss'
const Banner = () => (

    <div className="container flex flex-wrap  overflow-hidden ">

        <div className="my-1 px-10 py-20 w-full  sm:order-last xs:order-last overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <div className="lg:mt-20 title wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1000ms"
            >   <Title titletext="We Need To Talk." bgtext="Hi." /></div>
            <h4
                className="subtitle wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1000ms"

            ><span className={style.bannerContent}>It's about your branding and creative again...  it's been frightening.</span></h4>

        </div>

        <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <div className="wow fadeInLeft story-image"
                data-wow-delay="300ms"
                data-wow-duration="1000ms">
                <RunAwayLittleGirl className="banner" />
            </div>
        </div>

    </div>)
export default Banner
