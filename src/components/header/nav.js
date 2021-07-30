/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 17:22:21
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react'
import { Fragment } from 'react'
import Button from '../Buttons/Standard/button'
import Logo from '../Logo/logo.js'
import './hovers.scss'
import Linky from '../Effects/Linky'
import MobileButton from '../Buttons/Mobile/button'
import { Link } from 'gatsby';

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    PlusIcon,
    BellIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBullhorn,
    faChevrondown,

} from '@fortawesome/pro-thin-svg-icons'
import siteConfig from '../../utils/siteConfig'

function classNames(...classes) {
    return classes.filter(Boolean).join(` `)
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="h-40 max-w-full px-16 mx-auto sm:px-10 lg:px-10 sm:py-10 lg:py-8">
                        <div className="flex justify-between h-40 px-16">
                            <div className="flex h402">
                                <div className="flex items-center h-40 mr-2 -ml-2 md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-white hover:bg-gray-100 focus:outline-none ">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block w-10 h-10" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block w-10 h-10" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center flex-shrink-0">
                                  <Link href="/">  <Logo type="abbreviation" className="logoabbreviation" />
                                  </Link>   <Link href="/">  <Logo type="standard"  />
                                  </Link>    </div>
                                <div className="hidden ml-10 md:ml-6 md:flex md:items-center md:space-x-4">
                                    <Link href="/" className="text-base font-medium"> <span><Linky text="Home" /></span></Link>

                                    <Link href="/about" className="text-base font-medium"> <span><Linky text="About Us" /></span></Link>
                                 <Link href="/#services" className="text-base font-medium"> <span><Linky text="Services" /></span></Link>
                                    <Link href="/contact" className="text-base font-medium"> <span><Linky text="Contact" /></span></Link>

                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">

                                    <Button btntext="Schedule a Call" className="wow fadeInLeft"
                                        data-wow-delay="100ms"
                                        data-wow-duration="1000ms" btnlink="schedule" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className=" md:hidden">
                        <div className="h-full px-2 pt-2 pb-3 ml-10 space-y-1 rounded-4xl sm:px-3 bg-black-gradient">
                            <ul><li>        <Link href="/" className="text-base font-heaviest"> <span><Linky text="Home" /></span></Link>
                            </li>
                            <li>            <Link href="/about" className="text-base font-heaviest"> <span><Linky text="About Us" /></span></Link>
                            </li><li>        <Link href="/#services" className="text-base font-heaviest"> <span><Linky text="Services" /></span></Link>
                            </li><li>              <Link href="/contact" className="text-base font-heaviest"> <span><Linky text="Contact" /></span></Link>
                            </li><li>              <Link href="/schedule" className="text-base font-heaviest3r11"> <span><Linky text="Schedule" /></span></Link>
                            </li></ul>

                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

