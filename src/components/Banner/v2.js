import React from "react"
import RunAwayLittleGirl from '../Illustrations/RunAwayLittleGirl'
import Title from '../Titles/home.js'

"use strict"
const BannerTwo = () => {
    return (
<div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="px-10 mx-auto max-w-fulll sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="px-10 lg:py-24">

                  <Title titletext="We Need To Talk." bgtext="Hi." />



          <div
          className="text-xl wow fadeInLeft mulish"
          data-wow-delay="600ms"
          data-wow-duration="1000ms">It's about your branding and creative again...  it's been frightening.</div>



                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:relative">
                  <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">




  <div className="wow fadeInLeft story-image"
                data-wow-delay="300ms"
                data-wow-duration="1000ms">
                <RunAwayLittleGirl className="banner" />
                  </div>
                </div>
              </div>
    </div>
              )
}

export default BannerTwo;

