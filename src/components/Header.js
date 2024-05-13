import { useState } from 'react'
import { Dialog,  Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { clearLogIn } from '../feature/UserSlicer';
import { auth } from '../context/firebaseConfig';

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Logo from '../assets/Logo.png'
import toast from 'react-hot-toast';


export default function Header() {
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// Log out fun
const handleLogout = () => {
  auth.signOut()
    .then(() => {
      dispatch(clearLogIn);
      toast.success("Log out successfully")
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
};

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#pricing" className="text-sm  leading-6 text-gray-500">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm  leading-6 text-gray-500">
          Testimonials
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {loggedInUser ? (
            <>
              <p className="mt-2 text-sm text-gray-500">{loggedInUser.email}</p>
              <Link to='/users'>
              <button className="text-gray-900 focus:ring-2 focus:rounded-full  focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                Dashboard
              </button></Link>
              <button onClick={handleLogout} className="text-gray-900 focus:ring-2 focus:rounded-full  focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button type="button" className="text-gray-900 focus:ring-2 focus:rounded-full  focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                  Sign In
                </button>
              </Link>
              <Link to='/register'>
                <button type="button" className="text-gray-900 focus:ring-2 focus:rounded-full focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-400 hover:bg-gray-50"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-400 hover:bg-gray-50"
                >
                  Testimonials
                </a>
              </div>
              <div className="py-6">
              {loggedInUser ? (
            <>
              <p className="mt-2 text-sm text-gray-500">{loggedInUser.email}</p>
              <Link to='/users'>
              <button className="text-gray-900 focus:ring-2 focus:rounded-full  focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                Dashboard
              </button></Link>
              <button onClick={handleLogout} className="text-gray-900 focus:ring-2 focus:rounded-full  focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button type="button" className="text-gray-900 focus:ring-2 focus:rounded-full  focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                  Sign In
                </button>
              </Link>
              <Link to='/register'>
                <button type="button" className="text-gray-900 focus:ring-2 focus:rounded-full focus:ring-blue-400 font-bold text-sm px-7 py-2.5 me-2 mb-2">
                  Sign Up
                </button>
              </Link>
            </>
          )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
