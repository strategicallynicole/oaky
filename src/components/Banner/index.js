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


    <div class="flex flex-wrap overflow-visible px-10">

  <div class="w-full lg:mt-20 px-6 xl:mt-20 2xl:mt-20 mb-0 md:mb-10 lg:mb-10 xl:mb-20 2xl:mb-20 mt-0 overflow-hidden order-last sm:order-first md:w-1/2 lg:w-1/2 xl:w-1/2">
  <Title titletext="We Need To Talk." bgtext="Hi." />
  <h4
                className="wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1000ms"

            ><span className="text-xl font-normal mulish">It's about your branding and creative again...  it's been frightening.</span></h4>
    </div>

  <div class="w-full overflow-visible order-first sm:ml---25 sm:order-last md:w-1/2 lg:w-1/2 xl:w-1/2 mb-12 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
  <div className="wow fadeInLeft story-image"
                data-wow-delay="300ms"
                data-wow-duration="1000ms">
                <RunAwayLittleGirl className="banner" />
            </div>
</div>

</div>

)
export default Banner
