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
import './about.component.scss'

const About = () => (
    <>


<section>

<div className="flex flex-wrap px-10 overflow-visible">

  <div className="w-full overflow-visible sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
  <div className="md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0"><Meditating /></div>
  </div>

  <div className="w-full px-6 overflow-visible sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">

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

                            <p
                        className="text-lg description wow fadeInLeft"
                        data-wow-delay="100ms"
                        data-wow-duration="1000ms"
                    >
                        <div className="aboutDescription">
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
                    >                                                     <div className="aboutDescription">


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
                <Button btntext="Get To Know Us" btnlink="about" />

                </div>


  </div>


  </section>
    </>
)

export default About
