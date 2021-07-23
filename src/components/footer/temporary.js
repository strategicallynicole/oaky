import React, { useState , useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLinkedin, faQuora, faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Footer = ({ showBelow }) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) {
                setShow(true)
            }
        } else {
            if (show) {
                setShow(false)
            }
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` })
    }
    return (
        <footer className="text-gray-50 rn-footer-area bg-color-black text-md pt--90 pb-60">
            <div className="w-full footer-wrapper">
                <div className="flex w-full pl-20 pr-20 overflow-hidden">

                    <div className="flex-grow w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <div className="text-gray-50 ft-info wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <p className="text-gray-50">OAKwave LLC</p>
                        </div></div>

                    <div className="flex-grow hidden w-1/3 overflow-hidden lg:visible xl:visible sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <div className="hidden lg:visible xl:visible ft-info wow fadeInLeft"
                            data-wow-delay="300ms"
                            data-wow-duration="1000ms">
                            <p className="text-gray-50">3420 Archdale Drive<br />Raleigh, NC 27614</p>
                        </div>

                    </div>
                    <div className="flex-grow w-1/2 overflow-hidden lg:hidden xl:hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">

                        <div className="text-gray-50 lg:hidden xl:hidden ft-info wow fadeInLeft place-content-right place-items-right"
                            data-wow-delay="300ms"
                            data-wow-duration="1000ms">
                            <p><a className="text-gray-50" href="tel:9198234333">919.823.4333</a></p>
                        </div>

                    </div>

                    <div className="flex-grow w-1/3 overflow-hidden text-gray-50 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <div className="hidden text-gray-50 lg:inline xl:inline ft-info wow fadeInLeft"
                            data-wow-delay="600ms"
                            data-wow-duration="1000ms">
                            <p className="text-gray-50"> hi@oakwave.com<br />919.823.4333</p>
                        </div>
                    </div>

                </div>

                <div className="w-full pl-20 pr-20 overflow-hidden text-gray-50">

                    <ul className="social-share ft-info"
                        data-wow-delay="200ms"
                        data-wow-duration="1000ms">
                        <li><a href="https://www.facebook.com/oakwave"><FontAwesomeIcon className="text-gray-50" icon="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="https://linkedin.com/company/oakwave"><FontAwesomeIcon className="text-gray-50" icon={faLinkedin}
                        /></a></li>
                        {/*   <li><a href="#link"><FontAwesomeIcon icon={faQuora}
                    /></a></li> */}
                        <li><a href="https://www.twitter.com/oakwave"><FontAwesomeIcon className="text-gray-50" icon={faTwitter}
                        /></a></li>

                    </ul>
                </div>

            </div>

            <div className="back-to-top">
                <div className="backtop" onClick={handleClick}>
                    <span className="top"></span>
                </div>
            </div>

        </footer>
    )
}
export default Footer
