




import React, { useState , useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HubspotForm from 'react-hubspot-form'
import Pointing from '../Illustrations/Pointing/index'
import {
    faPhone, faHome, faEnvelope
} from '@fortawesome/pro-thin-svg-icons'
import {
    faFacebookF,
    faLinkedinIn, faQuora, faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Logo from "../Logo/logo"

function Footer( { showBelow } ) {

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
        <>
            <div>
                <div className="px-4 py-10 mt-40 bg-indigo-700 lg:px-0 lg:py-32">
                    <div className="container justify-between w-full mx-auto lg:flex">
                        <div className="justify-between lg:w-1/2 lg:flex">
                            <div className="flex flex-col mt-4 lg:mt-0 ">

                                    <div className="mt-20">  <Logo type="abbreviation" className=""></Logo>
                                    </div>
                           <span className="text-white">   <br />&copy; 2021 OAKwave, LLC.  All Rights Reserved.</span>
                            </div>
                            <div className="flex flex-col mt-4 lg:mt-0">
                                <ul>
                                    <li>
                                        <p href className="text-sm font-semibold tracking-wide text-white">
                                            About Us
                                        </p>
                                    </li>
                                    <li className="mt-6">
                                        <a href className="text-sm tracking-wide text-white">
                                            Our team
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a href className="text-sm tracking-wide text-white">
                                            Career
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a href className="text-base tracking-wide text-white">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col mt-4 lg:mt-0 lg:items-center">

                            <dl className="inline-block mt-8 text-xl text-gray-50 montserrat">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd className="flex text-sm">
                <FontAwesomeIcon className="flex-shrink-0 inline-block w-5 h-5 text-gray-50" icon={faHome} /><span className="pl-10">
                 Raleigh, NC</span>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex text-sm">
                <FontAwesomeIcon className="flex-shrink-0 inline-block w-5 h-5 text-gray-50" icon={faPhone} /><span className="pl-10"><a href="tel:9198234333"><span className="text-white hover:text-white">+1 (919) 823-4333</span></a></span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                <FontAwesomeIcon className="flex-shrink-0 inline-block w-5 h-5 text-gray-50" icon={faEnvelope} />
                  <span className="ml-3 text-sm ">hello@oakwave.com</span>
                </dd>
              </div>
              <div className=""><dt className="sr-only">Social</dt>
              <div className="social-share"
                        data-wow-delay="200ms"
                        data-wow-duration="1000ms">
                      <a href="https://www.facebook.com/oakwave"><FontAwesomeIcon className="inline-block w-5 h-5 mx-10 text-gray-50 fa-pull-left" icon={faFacebookF} /></a>
                        <a href="https://linkedin.com/company/oakwave"><FontAwesomeIcon className="inline-block w-5 h-5 mx-10 text-gray-50" icon={faLinkedinIn}
                        /></a>
                  <a href="#link"><FontAwesomeIcon className="inline-block w-10 h-5 mx-5 text-gray-50" icon={faQuora}
                    /></a>
                     <a href="https://www.twitter.com/oakwave"><FontAwesomeIcon className="inline-block w-5 h-5 mx-10 text-gray-50" icon={faTwitter}
                        /></a>
     </div></div>
            </dl>
</div>
   </div>
                        <div className="flex justify-center w-full pb-4 mt-10 lg:w-1/2 lg:mt-0 lg:justify-end lg:pb-0">
                            <div className="w-10/12 lg:w-1/2">
                                <h1 className="mb-6 text-lg font-semibold tracking-wide text-center text-white lg:text-left">Subscribe to our Newsletter</h1>
                                <div className="flex justify-center">
                                    <div className="relative flex items-center justify-center w-full bg-white rounded rounded-2xl">
                                        <input type="email" required placeholder="Your Email" id="email" aria-label="email" className="w-full h-12 pl-4 text-xs text-gray-700 placeholder-gray-600 bg-transparent rounded-lg lg:h-16 sm:text-base focus:outline-none" />
                                        <button type="submit" className="absolute inset-y-0 right-0 h-full px-2 py-2 text-xs font-medium text-white text-indigo-700 transition duration-150 ease-in-out border-l border-gray-300 rounded focus:outline-none lg:text-base sm:px-6 lg:py-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 bg-gray-100">
                    <h1 className="text-base text-center text-gray-700">©2020 - Inertia. All right reserved</h1>
                </div>
            </div>
        </>
    );
}

export default Footer;


