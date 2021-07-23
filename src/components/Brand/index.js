/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 30/06/2021 - 22:40:32
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Brand = () => {
    const one = `./clientlogos/IFA-logo.png`
    const two = `./clientlogos/freshworks.png`
    const three = `./clientlogos/valpaklogo.png`
    const four = `./clientlogos/robo-negotiator.png`
    const five = `./clientlogos/ehw.png`
    const six = `./clientlogos/cuemby.png`
    const seven = `./clientlogos/baskinrobbins.png`
    const eight = `./clientlogos/dunkindonuts.jpg`
    return (
        <div className="px-10 rn-brand-area rn-section-gapTop pb--200">
            <div className="px-10">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-list-wrapper">

                            <div className="single-image" key="one">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={one}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>

                            <div className="single-image" key="two">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={two}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>

                            <div className="single-image" key="three">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={three}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>

                            <div className="single-image" key="four">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={four}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>
                            <div className="single-image" key="five">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={five}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>

                            <div className="single-image" key="six">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={six}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>

                            <div className="single-image" key="seven">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={seven}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />
                                </a>
                            </div>

                            <div className="single-image" key="eight">
                                <a
                                    className="wow fadeInDown"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                    href="#brand"

                                >
                                    <StaticImage
                                        src={eight}
                                        alt="Run Away Little Girl"
                                        layout="fullWidth"
                                        className="overflow-visible grayscale animate-enter"
                                    />

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Brand
