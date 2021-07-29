`use strict`

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone, faHome, faEnvelope
} from '@fortawesome/pro-thin-svg-icons'
import {
    faFacebookF,
    faLinkedinIn, faQuora, faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import HubspotForm from 'react-hubspot-form'
import mail from '../components/Illustrations/Mail/youvegotmail.svg'
import Layout from '../components/layout'
import Title from '../components/Titles/h1'



/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Contact() {
    return (
        <Layout>
      <div className="relative bg-fixed bg-wallpaper">
     <div className="w-full pt-20 pl-16"> <Title
                    className="z-50 pt-20 pl-20 ml-20 wow slideInRight"
                    data-wow-delay="1s"
                    bgtext="Get In Touch"
                    titletext="Contact"
                /></div>
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="object-cover w-full h-full lg:absolute slideInRight"
                    data-wow-delay="1s"

              src={mail}
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 py-16 mx-16 sm:py-24 sm:px-6 lg:px-8 lg:mx-32 lg:max-w-full lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="pl-16 mx-auto max-w-7xl sm:max-w-full lg:mx-0 ">
              <p className="mt-4 text-xl mulish text-gray-50 sm:mt-3">
                We’d love to hear from you! Send us a message using the form opposite, or email us.
              </p>



            <dl className="inline-block mt-8 text-xl text-gray-50 montserrat">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd className="flex">
                <FontAwesomeIcon className="flex-shrink-0 inline-block w-10 h-10 text-gray-50" icon={faHome} /><span className="pl-10">3420 Archdale Drive
                  <br />Raleigh, NC 27614</span>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                <FontAwesomeIcon className="flex-shrink-0 inline-block w-10 h-10 text-gray-50" icon={faPhone} /><span className="pl-10"><a href="tel:9198234333"><span className="text-white hover:text-white">+1 (919) 823-4333</span></a></span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                <FontAwesomeIcon className="flex-shrink-0 inline-block w-10 h-10 text-gray-50" icon={faEnvelope} />
                  <span className="ml-3">hello@oakwave.com</span>
                </dd>
              </div>
              <div className="mt-3"><dt className="sr-only">Social</dt>
              <div className="social-share"
                        data-wow-delay="200ms"
                        data-wow-duration="1000ms">
                      <a href="https://www.facebook.com/oakwave"><FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50 fa-pull-left" icon={faFacebookF} /></a>
                        <a href="https://linkedin.com/company/oakwave"><FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50" icon={faLinkedinIn}
                        /></a>
                  <a href="#link"><FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50" icon={faQuora}
                    /></a>
                     <a href="https://www.twitter.com/oakwave"><FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50" icon={faTwitter}
                        /></a>
     </div></div>
            </dl>


            <HubspotForm
                            portalId="8988772"
                            formId="736e5239-cb5c-440c-9dad-ac0775b8fa70"
                            onSubmit={() => console.log(`Submit!`)}
                            onReady={form => console.log(`Form ready!`)}
                            loading={<div>Loading...</div>}
                        />


            </div>
          </div>
        </div>
      </div>
      </Layout>
    )
  }



