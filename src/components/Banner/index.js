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
import './banner.comp.scss'
const Banner = () => (



    <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
  <div className="order-last w-full px-2 my-2 overflow-hidden vertical-center lg:px-10 xl:top-50 lg:top-50 xl:px-10 sm:my-2 sm:px-2 md:my-2 md:px-2 md:w-1/2 sm:order-last lg:order-first xl:order-first md:order-last lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
 <Title titletext="We Need To Talk." bgtext="Hi." />

  <h4
                className="wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1000ms"

            ><span className="text-xl font-normal mulish">It's about your branding and creative again...  it's been frightening.</span></h4>


  </div>

  <div className="w-full px-2 my-2 overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 sm:order-last md:order-last lg:order-first xl:order-first md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">


  <div className="wow fadeInLeft story-image"
                data-wow-delay="300ms"
                data-wow-duration="1000ms">
                <RunAwayLittleGirl className="banner" />
            </div>



  </div>
</div>



)
export default Banner
