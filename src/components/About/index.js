/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/06/2021 - 18:04:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/06/2021
 * - Author          :
 * - Modification    :
 **/
import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import Meditating from '../Illustrations/Meditating'
import Title from '../Titles/h2.js'
import Button from '../Buttons/Standard/button'
import * as styles from './about.module.scss'

const About = () => {
    return (
        <>



<div class="flex flex-wrap  overflow-hidden pt-60">

<div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
<div className={styles.aboutArea} id="about">
<div
                            className="title wow fadeInLeft thumbnail"
                            data-wow-delay="100ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="pt-5">
                                <Meditating />
                            </div>
                        </div>
</div></div>
<div class="my-1 px-6 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-5 lg:w-1/2 xl:my-1 xl:px-5 xl:w-1/2">
<div className={styles.aboutContent}>
                                <div className="section-title">
                                    <div className="title-wrap">
                                        <div
                                            className="title wow fadeInLeft"
                                            data-wow-delay="100ms"
                                            data-wow-duration="1000ms"
                                        >
                                            <Title
                                                bgtext="About Us"
                                                titletext="About OAKwave"
                                            />
                                        </div>
                                        <h4
                                            className="text-2xl subtitle wow fadeInLeft montserrat bold"
                                            data-wow-delay="100ms"
                                            data-wow-duration="500ms"
                                        >
                                            Creative and Brand Growth Consulting
                                            Firm
                                        </h4>
                                    </div>
                                </div>
                                <p
                                    className="text-lg description wow fadeInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="1000ms"
                                >
                                    <div className={styles.aboutDescription}>
                                        We call ourselves confounding creative
                                        composers, symphony strategic seers,
                                        marketing de-spaghettification experts,
                                        and problem-solving superheroes.
                                    </div>
                                </p>

                                    <p
                                        className="text-lg description wow fadeInLeft"
                                        data-wow-delay="100ms"
                                        data-wow-duration="2000ms"
                                    >                                <div className={styles.aboutDescription}>

                                        We offer branding, creative infusion,
                                        growth consulting, marketing strategy,
                                        and design services unlike any agency or
                                        strategy you've ever seen. In less than
                                        eight weeks, we dissect every inch of
                                        your organization's marketing, come up
                                        with an unprecedented killer plan to
                                        change the world for your company, and
                                        provide you with the roadmap, creative
                                        (design/content/etc), branding,
                                        messaging, measurements, and goals you
                                        need to steer the ship in the right
                                        direction. We boost the ROI from your
                                        existing marketing
                                        team/agency/infrastructure. Basically,
                                        we fix problems and make you kick more
                                        🍑.</div>
                                    </p>
                                </div>
                               <Button btntext="Get To Know Us" btnlink="about" />
                            </div>

</div>



            </>
    )
}

export default About
