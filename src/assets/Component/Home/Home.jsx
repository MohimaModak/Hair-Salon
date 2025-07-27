import React, { useEffect } from 'react';
import background from "../../../Gallery/2.jpg";
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Service from '../Service/Service';
import Problem from '../Problem/Problem';
import Testimonals from '../Testimonals/Testimonals';
import Footer from '../Footer/Footer';
import Style from '../Style/Style';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div id='/'>
        <div className='relative'>
          <img src={background} className='w-full h-screen object-cover' alt="Background" />
        </div>
        <div data-aos="slide-up" className='absolute inset-0 main flex justify-center md:justify-stretch items-center text-red-50 mx-5 md:mx-24'>
          <div className='bg-white/15 backdrop-blur-2xl p-4 lg:p-8 hover:text-gray-600  rounded-3xl shadow-md hover:scale-105 duration-1000'>
            <h1 className='text-6xl md:text-9xl  font-bold shadow hero-heading '>
              {/* Your Hair’s Beauty<br />Defines Your Elegance. */}
              Hair <br /> Salon
            </h1>
            <p className='text-xl md:text-2xl my-4  shadow'>
              Discover styles crafted to reveal your true charm.
            </p>
            <Link to='/Contact' smooth={true} duration={1000}>
              <div className='flex  items-center'>
                <button className="bg-red-50 text-gray-600  uppercase px-4 py-3 font-semibold rounded-full hover:scale-110 duration-1000 hover:bg-gray-800 hover:text-white">
                  Book Appointment
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Service></Service>
      <Problem></Problem>
      <Style></Style>
      <Testimonals></Testimonals>
      <Footer></Footer>
    </div>
  );
}
