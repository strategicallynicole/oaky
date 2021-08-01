




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
        <footer>
            <div>
                <div className=" bg-black-gradient lg:px-0">
                    <div className="container justify-between w-full mx-auto lg:flex">
                        <div className="justify-between lg:w-1/2 lg:flex">
                            <div className="flex flex-col mt-4 lg:mt-0 ">

                                    <div className="mt-20 mb-20 ml--25 mt--25">  <Logo type="abbreviationfooter" className=""></Logo>
                                    </div>
                                    <div className=""><dt className="sr-only">Social</dt>
              <div className="social-share"
                        data-wow-delay="200ms"
                        data-wow-duration="1000ms">
                      <a href="https://www.facebook.com/oakwave"><FontAwesomeIcon className="inline-block w-5 h-5 mx-10 text-gray-50 " icon={faFacebookF} /></a>
                        <a href="https://linkedin.com/company/oakwave"><FontAwesomeIcon className="inline-block w-5 h-5 mx-10 text-gray-50" icon={faLinkedinIn}
                        /></a>
                  <a href="#link"><FontAwesomeIcon className="inline-block w-10 h-5 mx-5 text-gray-50" icon={faQuora}
                    /></a>
                     <a href="https://www.twitter.com/oakwave"><FontAwesomeIcon className="inline-block w-5 h-5 mx-10 text-gray-50" icon={faTwitter}
                        /></a>
     </div></div>
                            </div>
                            <div className="flex flex-col mt-4 lg:mt-0">

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

            </dl>
</div>
   </div>
                        <div className="flex w-full pb-4 justify-top lg:w-1/2 lg:mt-0 lg:justify-end lg:pb-0">
                            <div className="w-10/12 lg:w-1/2">
                                <h5 className="text-white">Subscribe to our Newsletter</h5>
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
                <div className="py-5 ">
                <span className="text-white">  &copy; 2021 OAKwave, LLC.  All Rights Reserved.</span>
                </div>
            </div>

            <div className="back-to-top">
                <div className="backtop" onClick={handleClick}>
                    <span className="top"></span>
                </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;


