/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
import React from "react"
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
  } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Link } from 'gatsby'
import BannerTwo from "../Banner/v2"
import {
    faFacebookF,
    faLinkedinIn,
    faQuora,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import HubspotForm from 'react-hubspot-form'
import Logo from '../Logo/logo.js'
import Linky from '../Effects/GradientUnderline'
import Button from '../Buttons/Standard/button'
import Footer from '../footer/tw'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPaintBrush,
    faPen,
    faSpiderWeb,
    faBullhorn,
    faCowbell,
    faNarwhal,
    faPhone,
    faBars,
    faXmark,
    faHome,
} from '@fortawesome/pro-thin-svg-icons'
import { Popover, Transition } from '@headlessui/react'

import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'


import '../../scss/style.scss'
import '../../styles/base.css'

const navigation = [
    { name: 'Home', href: '/', icon: faHome, current: false },
    { name: 'About', href: '/about', icon: faBullhorn, current: false },
    { name: 'Services', href: '/#services', icon: faNarwhal, current: false },
    { name: 'Blog', href: '/blog', icon: faPen, current: false },
    { name: 'Conact', href: '/contact', icon: faPhone, current: false },
    {
        /*name: 'Resources', href: '#', icon: ChartBarIcon, current: false */
    },
]


export default function Layout ({children}) {
  return (
    <div className="bg-black-gradient">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          {({ open }) => (
            <>
              <div className="pt-6 bg-transparent">
                <nav
                  className="relative flex items-center justify-between max-w-full px-4 mx-auto sm:px-6"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <span className="sr-only">OAKwave</span>

                        <Link
                                        href="/"
                                        aria-label="OAKwave"
                                        title="OAKwave"
                                        class=" flex-none  items-center"
                                    >
                                        <Logo
                                            type="abbreviation"
                                            className="flex-none m-6 logoabbreviation"
                                        />
                                    </Link>{' '}
                                    <Link
                                        href="/"
                                        aria-label="OAKwave"
                                        title="OAKwave"
                                        class=" flex-none  m-6 items-center"
                                    >
                                        {' '}
                                        <Logo type="standard" />
                                    </Link>

                      <div className="flex items-center max-w-sm -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center max-w-sm p-2 rounded-md text-gray-50 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
       </Popover.Button>
                      </div>
                    </div>
                    <div className="hidden space-x-4 md:flex md:ml-10">
                      {navigation.map((item) => (
                      <div>


                    <Linky text={item.name} link={item.href} />
</div>

                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex md:items-center md:space-x-6">
                  <Button
                                              btnlink="/schedule"
                                              btntext="Schedule A Call"
                                              class=" h-12 px-6 mb-20 mr-20 mr-10 pr-10 flex-shrink"
                                              aria-label="Schedule"
                                              title="Schedule A Call"
                                        >
                                            Schedule A Call
                                        </Button>

                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden"
                >
                  <div className="overflow-hidden">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                      <Link
                                        href="/"
                                        aria-label="OAKwave"
                                        title="OAKwave"
                                        class=" flex-none  items-center"
                                    >
                                        <Logo
                                            type="abbreviation"
                                            className="flex-none m-6 logoabbreviation"
                                        />
                                    </Link>{' '}
                                    <Link
                                        href="/"
                                        aria-label="OAKwave"
                                        title="OAKwave"
                                        class=" flex-none  m-6 items-center"
                                    >
                                        {' '}
                                        <Logo type="standard" />
                                    </Link>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                          <span className="sr-only">Close menu</span>
                          <FontAwesomeIcon
                                            icon={faXmark}
                                            className="w-20 h-20"
                                            aria-hidden="true"
                                        />{' '}                        </Popover.Button>
                      </div>
                    </div>
                    <div className="pt-5 pb-6">
                      <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 "
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="px-5 mt-6">
                        <a
                          href="#"
                          className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                        >
                          Start free trial
                        </a>
                      </div>
                      <div className="px-5 mt-6">
                        <p className="text-base font-medium text-center text-gray-500">
                          Existing customer?{' '}
                          <a href="#" className="text-gray-900 hover:underline">
                            Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="max-w-full mx-auto lg:px-8">
              <BannerTwo />
            </div>
          </div>






          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold tracking-wider text-gray-300 uppercase">
                  Award winning support
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">We’re here to help</p>
                <p className="mt-3 text-lg text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                  scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                  tincidunt duis.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">




                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </main>
 <Footer />
      </div>
    </div>
  )
}

