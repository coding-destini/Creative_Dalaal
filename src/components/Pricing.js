import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <div><>
    {/* ====== Pricing Section Start */}
    <section id='pricing' className="relative max-w-7xl mx-auto z-10 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl leading-[1.208] font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available but
                the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
       <PricingCard  type='Free' users='Free users' work ='Works on 1 Device at once' price = 'Free'/>
       <PricingCard type='Standard Plan' users='Limited people' work ='Works on 4 Devices at once'  connect = 'Connect Anyware' price = '$9'/>
       <PricingCard type='Premium Plan' users='All Creative Heads' work ='Works on All Devices'  connect = 'Connect Anyware' Feature = 'Get New Features' price = '$12' />
        </div>
      </div>
    </section>
    {/* ====== Pricing Section End */}
  </>
  </div>
  )
}

export default Pricing