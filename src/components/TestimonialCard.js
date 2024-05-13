import React from 'react'

const TestimonialCard = () => {
    return (
        <div>
     
                   
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t px-6 border-slate-100 pt-6">
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            <img
                                                alt=""
                                                className="h-14 w-14 object-cover"
                                                style={{ color: "transparent" }}
                                                src="https://randomuser.me/api/portraits/men/15.jpg"
                                            />

                                        </div>
                                        <span>Viezh Robert</span>

                                        <div>
                                            <div className="font-display text-base text-slate-900">
                                                4.5 <i class="fa-solid fa-star" style={{ color: '#FEA250' }}></i>
                                            </div>
                                        </div>

                                    </figcaption>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">

                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                I love the fitness apparel and gear I purchased from this
                                                site. The quality is exceptional and the prices are
                                                unbeatable.
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            </ul>
                        </li>
             

        </div>
    )
}

export default TestimonialCard