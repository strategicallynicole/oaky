import React from "react"

import { Fragment } from 'react'
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
import { Link } from 'gatsby'
import { Popover, Transition } from '@headlessui/react'
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
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'


const navigation = [
    { name: 'Home', href: '/', icon: faHome, current: false },
    { name: 'About', href: '/about', icon: faBullhorn, current: false },
    { name: 'Services', href: '/#services', icon: faNarwhal, current: false },
    { name: 'Blog', href: '/blog', icon: faPen, current: false },
    { name: 'Contact', href: '/contact', icon: faPhone, current: false },
    {
        /*name: 'Resources', href: '#', icon: ChartBarIcon, current: false */
    },
]


export default function Nav({children}) {
  return (
    <div className="bg-black-gradient">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          {({ open }) => (
            <>
              <div className="p-10 bg-glass">
                <nav
                  className="relative z-50 flex items-center justify-between w-full px-4 mx-auto sm:px-6"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 m-6">
                    <div className="z-50 flex items-center justify-between flex-none w-full md:w-auto">
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



                      <div className="z-50 flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="z-50 w-12 h-12 mt-4 mb-4 mr-10 text-white focus:bg-gradient hover:bg-gradient" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="z-50 hidden space-x-8 md:flex md:ml-10">
                      {navigation.map((item) => (
                      <div className="flex items-center w-full py-2 pl-2 text-white group hover:text-white"> <Linky text={item.name} link={item.href} />
                 </div>

                      ))}
                  </div> </div>
                  <div className="flex-shrink hidden md:flex md:items-center md:space-x-6">
                  <Button btnlink="/schedule" btntext="Schedule A Call" class=" h-12 px-6  mb-20 flex-shrink" aria-label="Schedule" title="Schedule A Call">
                                            Schedule A Call
                                        </Button>


                  </div> </nav>
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
                  className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top transform md:hidden"
                >
                  <div className="z-50 p-10 overflow-hidden shadow-md bg-glass">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                      <Link
                                        href="/"
                                        aria-label="OAKwave"
                                        title="OAKwave"
                                        class="inline-flex items-center m-6"
                                    >
                                        <Logo
                                            type="abbreviation"
                                            className="logoabbreviation"
                                        />
                                    </Link>{' '}
                                    <Link
                                        href="/"
                                        aria-label="OAKwave"
                                        title="OAKwave"
                                        class="inline-flex items-center m-6"
                                    >
                                        {' '}
                                        <Logo type="standard" />
                                    </Link>

                      </div>
                      <div className="m-5 -mr-2 hover:bg-gradient">
                      <Popover.Button className="inline-flex items-center justify-center p-2">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="z-50 w-12 h-12 p-4 m-4 text-white focus:bg-contain focus:bg-gradient hover:bg-gradient" aria-hidden="true" />
                        </Popover.Button>
                    </div></div>
                    <div className="z-50 p-10 pt-5 pb-6">
                      <div className="z-50 px-2 space-y-1">
                        {navigation.map((item) => (
                               <div className="z-50 inline-block w-full py-2 pl-2 text-white group hover:text-white">  <Link
                        key={item.name}
                        href={item.href}
                        activeClassName="z-50 text-white hover:text-white"
                        className=""
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            className="inline-block w-12 h-12 mr-3 text-white hover:text-white"
                            aria-hidden="true"
                        />   </Link>

                      <Linky text={item.name} link={item.href} />
                 </div>

                        ))}

                      <div className="px-5 py-10 mt-6">
                      <Button
                                            btnlink="/schedule"
                                            btntext="Schedule A Call"
                                            class=" h-12 px-6 mb-20"
                                            aria-label="Schedule"
                                            title="Schedule A Call"
                                        >
                                            Schedule A Call
                                        </Button></div>
                      </div>

                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
            {children}

      </div>
    </div>
  )
}
