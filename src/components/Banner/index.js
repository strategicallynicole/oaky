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
import { Controller, Scene } from 'react-scrollmagic'
import RunAwayLittleGirl from '../Illustrations/RunAwayLittleGirl'
import './banner.component.scss'
const Banner = () => {


    return (
        <div className="relative px-20 mx-auto mb-0 rn-slide slider-style-01 rn-slider-area"
            id="home">
            <div className="flex flex-col-reverse items-center justify-between h-screen lg:flex-row ">
                <div className="pt-8 lg:w-1/2 lg:pt-0">
                    <div className="inner">
                        <div className="content">
                            <h1
                                className="title wow fadeInLeft"
                                data-wow-delay="200ms"
                                data-wow-duration="1000ms"
                            >Hi. <span className="primary-color">We Need To Talk.</span></h1>

                            <h4
                                className="subtitle wow fadeInLeft"
                                data-wow-delay="300ms"
                                data-wow-duration="1000ms"

                            >It's about your branding and creative again...  it's been frightening.</h4>
                        </div>
                    </div>
                </div>
                <div className="pt-6 mt-96 lg:mt-6 lg:w-1/2 lg:pt-0">
                    <Controller>
                        <Scene
                            classToggle="animated"
                            data-wow-delay="300ms"
                                data-wow-duration="1000ms"

                        >
                            <div className="rn_surface story-image">
                                <div className="trigger" id="trigger" />
                                <RunAwayLittleGirl className="banner" />{' '}
                            </div>
                        </Scene>
                    </Controller>{' '}
                </div>
            </div>
            {/* Hero */}
        </div>
    )
}
export default Banner
