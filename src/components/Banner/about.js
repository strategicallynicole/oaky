import React from "react"
import Meditating from '../Illustrations/Meditating'
import Title from '../Titles/h2.js'
import Button from '../Buttons/Standard/button'

"use strict"
const About = () => {
    return (
<div className="py-10 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="px-10 mx-auto max-w-fulll sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="px-10 lg:py-24">

                  <Meditating />




                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:relative">
                  <div className="max-w-md px-4 py-20 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">





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

                </div>                  </div>
                </div>
              )
}

export default About;

