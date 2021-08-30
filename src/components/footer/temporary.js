import React, { useState , useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HubspotForm from 'react-hubspot-form'
import Pointing from '../Illustrations/Pointing/index'

import {
    faPhone, faHome
} from '@fortawesome/pro-thin-svg-icons'
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
        <footer className="bg-transparent text-gray-50 rn-footer-area text-md pt--90 pb-60 ">



<div class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1 px-16 w-full place-content-center xl:place-content-right lg:place-content-right sm:place-items-center sm:place-content-center md:place-content-center lg:place-items-right xl:place-items-right">
<div class="w-full sm:w-full flex-grow overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/ place-content-center xl:place-content-right lg:place-content-right sm:place-items-center sm:place-content-center md:place-content-center lg:place-items-right xl:place-items-right">
<div className="ml-16 text-gray-50 mulish wow fadeInLeft place-content-right place-items-left sm:place-items-center"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <p className=""><span className="text-2xl font-black stroke-1 text-stroke-1 text-stroke-white stroke-white gradienttext montserrat place-content-center xl:place-content-right lg:place-content-right sm:place-items-center sm:place-content-center md:place-content-center lg:place-items-right xl:place-items-right">OAKwave LLC</span><br /><FontAwesomeIcon className="text-gray-50 mulish" icon={faHome} /><span className="ml-10 mulish">PO Box 80612</span><br /><span className="pl-5 ml-10 mulish">Raleigh, NC 27675</span><br /><a className="text-gray-50" href="tel:9198234333"><FontAwesomeIcon className="text-gray-50" icon={faPhone} /><span className="ml-10 mulish hover:text-white">919.823.4333</span></a></p>
                        </div>


</div>


<div class="w-full overflow-hidden md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
<div className="text-gray-50 mulish ft-info wow fadeInLeft place-content-center xl:place-content-right lg:place-content-right sm:place-items-center sm:place-content-center md:place-content-center lg:place-items-right xl:place-items-right"
                            data-wow-delay="300ms"
                            data-wow-duration="1000ms">


                            <div className="text-gray-50 mulish lg:inline xl:inline ft-info wow fadeInLeft"
                            data-wow-delay="600ms"
                            data-wow-duration="1000ms">
                               <div className="mt-8 xl:mt-0">
                        <h3 className="font-bold tracking-wider text-gray-200 text-md mulish">
                Subscribe to our newsletter
                        </h3>
                        <Pointing />

                        <HubspotForm
                            portalId="8988772"
                            formId="9ad7037d-3e57-4d91-8874-fd9af54dbc27"
                            onSubmit={() => console.log(`Submit!`)}
                            onReady={form => console.log(`Form ready!`)}
                            loading={<div>Loading...</div>}
                        />
                    </div>



                        </div>


                        </div>

</div>







                <div className="w-full pl-20 pr-20 overflow-hidden text-gray-50">

                    <ul className="social-share ft-info"
                        data-wow-delay="200ms"
                        data-wow-duration="1000ms">
                        <li><a href="https://www.facebook.com/oakwave"><FontAwesomeIcon className="text-gray-50" icon={faFacebook} /></a></li>
                        <li><a href="https://linkedin.com/company/oakwave"><FontAwesomeIcon className="text-gray-50" icon={faLinkedin}
                        /></a></li>
                     <li><a href="#link"><FontAwesomeIcon   className="text-gray-50" icon={faQuora}
                    /></a></li>
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
