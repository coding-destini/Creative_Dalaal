import React from 'react'
import TestimonialCard from './TestimonialCard'


const Testimonials = () => {
  return (
    <div>
               <section
                id="testimonials"
                aria-label="What our customers are saying"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            Trusted by Thousands of <br /> Happy Customer
                        </h2>
                        <p className='text-gray-400 mt-9'>
                            These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                    >
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    </ul>
                    </div>
            </section>
    </div>
  )
}

export default Testimonials