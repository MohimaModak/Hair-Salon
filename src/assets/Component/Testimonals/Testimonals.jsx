import React from 'react'
import fb from "../../../Gallery/facebook.png";
import instagram from "../../../Gallery/instagram.png";
import telephone from "../../../Gallery/telephone.png";
import whatsapp from "../../../Gallery/whatsapp.png";
import contact from "../../../Gallery/c1.jpeg";

export default function Testimonals() {
    return (
        <div id='/Testimonals' className='bg-gray-800'>
            <div className='lg:flex items-center gap-10'>
                <div className='lg:w-2/4'>
                    <img src={contact} />
                </div>
                <div className=' p-5 lg:p-0 py-10'>
                    <h1 data-aos="slide-down" className='text-4xl md:text-6xl font-bold hero-heading'>
                        Contact With Us
                    </h1>

                    <div data-aos="slide-down" className="text-lg space-y-1 py-5">
                        <p><strong>Opening Hours:</strong></p>
                        <p>🕘 Sunday – Thursday: 10:00 AM – 8:00 PM</p>
                        <p>🕘 Friday: 3:00 PM – 8:00 PM</p>
                        <p>❌ Saturday: Closed</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img data-aos="slide-down" src={fb} className='w-7' />
                        <img data-aos="slide-up" src={instagram} className='w-7' />
                        <img data-aos="slide-down" src={telephone} className='w-7' />
                        <img data-aos="slide-up" src={whatsapp} className='w-7' />
                    </div>
                </div>

            </div>
        </div>
    )
}
