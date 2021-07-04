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
import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'
import Button from '../Buttons/Boom/button'
import Logo from '../Logo/logo.js'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav () {
  return (
    <Disclosure as='nav' className='fixed z-50 w-full bg-black-gradient'>
      {({ open }) => (
        <>
          <div className='px-20 py-6 mx-auto sm:px-6 lg:px-8 '>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex items-center mr-2 -ml-2 md:hidden bg-black-gradient'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-gradient focus:outline-none'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex items-center flex-shrink-0'>
                  <Logo type='abbreviation' classes='block w-auto md:hidden'  />

                  <Logo type='standard' classes='hidden w-auto md:block'  />
                </div>
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>

                  <Button />
                </div>
                <div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>

                  {/* Profile dropdown */}

                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden bg-black-gradient'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
