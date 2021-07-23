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
const About = () => (
    <>

        <div
            className="rb-about-area about-style"
            id="about"
        >

            <div className="flex flex-col-reverse items-center justify-between h-screen px-10 lg:flex-row">
                <div className="pt-8 lg:w-1/2 lg:pt-0">
                    <div className="thumbnail">
                        <div className="trigger" id="trigger2" />
                        <Controller>
                            <Scene
                                classToggle="animated"
                                triggerElement="#trigger2"
                                triggerHook="onEnter"
                            >
                                <div className="pt-5 rn_surface story-image">
                                    <Meditating />
                                </div>
                            </Scene>
                        </Controller>
                    </div>
                </div>

                <div className="pt-6 mt-96 lg:mt-6 lg:w-1/2 lg:pt-0">

                    <div className="inner">
                        <div className="content">
                            <div className="section-title">
                                <div className="title-wrap">
                                    <h3
                                        className="title wow fadeInLeft"
                                        data-wow-delay="100ms"
                                        data-wow-duration="1000ms"
                                    >

                                          About OAKwave
                                        <span className="bg">About Us</span>
                                    </h3>
                                    <h4
                                        className="subtitle wow fadeInLeft"
                                        data-wow-delay="100ms"
                                        data-wow-duration="1000ms"
                                    >Creative and Brand Growth Consulting Firm</h4>
                                </div>

                                <p
                                    className="description wow fadeInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="1000ms"

                                >We call ourselves confounding creative composers, symphony strategic seers, marketing de-spaghettification experts, and problem-solving superheroes.
                                </p>

                                <p
                                    className="description wow fadeInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="1000ms"

                                >We offer branding, creative infusion, growth consulting, marketing strategy, and design services unlike any agency or strategy you've ever seen. In less than eight weeks, we dissect every inch of your organization's marketing, come up with an unprecedented killer plan to change the world for your company, and provide you with the roadmap, creative (design/content/etc), branding, messaging, measurements, and goals you need to steer the ship in the right direction. We boost the ROI from your existing marketing team/agency/infrastructure. Basically, we fix problems and make you kick more 🍑.</p>

                            </div>
                            <div className="button-group mt--30">

                                <a
                                    className="rn-button wow fadeInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="1000ms"
                                    href="#downloadbutton"
                                >
                                    <span>Hello</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
)

export default About
