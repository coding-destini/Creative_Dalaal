import React from 'react'
import Logo from '../assets/Logo.png'


const Footer = () => {
  return (
    <footer className="bg-white" style={{ marginTop:'150px' }}>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <img
              src={Logo}
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
          </a>
          <br/>
          <p className='text-gray-400' style={{fontSize:'14px'}}>CreativeWorks is a private network that has <br/> unique sets of people with creative minds
            <br/><br/>
            ©2020LaslesVPN
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Product
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium" style={{fontSize:'14px'}}>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Download
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Countries
                </a>
              </li >
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Engage
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium" style={{fontSize:'14px'}}>
            <li className="mb-4">
                <a href="#" className="hover:underline">
                CreativeWorks?
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Tutorials
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Privacy Policy
                </a>
              </li >
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div style={{fontSize:'14px'}}>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
            Earn Money
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Affiliate
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Become Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  </footer>
  
  )
}

export default Footer