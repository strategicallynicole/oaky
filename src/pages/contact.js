/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 18:56:32
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2021
    * - Author          :
    * - Modification    :
**/
`use strict`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import { MetaData } from '../components/common/meta'
import Meeting from '../components/Meeting'
import Alarmed from '../components/Illustrations/Schedule'
import Quiz from '../components/Quiz'
import Definition from '../components/Definition'
import BusinessMan from '../components/Illustrations/Businessman'
import Title from '../components/Titles/h1.js'
import Counter from '../components/counter'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import Contact from '../components/Meeting/index'

const offices = [
    { id: 1, city: 'Raleigh', address: ['3420 Archdale Drive', 'Raleigh, NC 27614'] }

  ]

const ContactPage = ({ location }) => (
    <>

        <Layout>
        <MetaData
                data={data}
                location={location}
                type="article"
            />

        {/* Header */}
        <div className="bg-transparent">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">

              <Title
                    className="wow slideInRight"
                    data-wow-delay="1s"
                    bgtext="Get In Touch"
                    titletext="Contact"
                />

              <p className="max-w-3xl mt-6 text-xl text-warm-gray-500">

              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section className="relative bg-transparent" aria-labelledby="contact-heading">
          <div className="absolute w-full bg-transparent h-1/2" aria-hidden="true" />
          {/* Decorative dot pattern */}
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <svg
              className="absolute top-0 right-0 z-0 transform translate-x-1/2 -translate-y-16 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-warm-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative px-6 py-10 overflow-hidden bg-gradient sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Contact information</h3>
                  <p className="max-w-3xl mt-6 text-base text-teal-50">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                    lacus arcu.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                      <span className="ml-3">support@workcation.com</span>
                    </dd>
                  </dl>
                  <ul className="flex mt-8 space-x-12" role="list">
                    <li>
                      <a className="text-teal-200 hover:text-teal-100" href="#">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="text-teal-200 hover:text-teal-100" href="#">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="text-teal-200 hover:text-teal-100" href="#">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
<div className="wow slideInRight"
                data-wow-delay="1s"><Contact /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section aria-labelledby="offices-heading">
          <div className="px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
            <h2 id="offices-heading" className="text-3xl font-extrabold text-warm-gray-900">
              Our offices
            </h2>
            <p className="max-w-3xl mt-6 text-lg text-warm-gray-500">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
              dui laoreet diam sed lacus, fames.
            </p>
            <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                <div key="111111">
                  <h3 className="text-lg font-medium text-warm-gray-900">Raleigh</h3>
                  <p className="mt-2 text-base text-warm-gray-500">

                      <span key="3420 Archdale Drive" className="block">
3420 Archdale Drive                      </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        </Layout>
    </>
)

export default ContactPage

