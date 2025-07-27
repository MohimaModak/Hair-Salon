import React from 'react';
import service1 from "../../../Gallery/s1.jpeg";
import service2 from "../../../Gallery/s2.jpeg";
import service3 from "../../../Gallery/s3.jpeg";
import service4 from "../../../Gallery/s4.jpeg";

export default function Style() {
  return (
    <div id='/Style' className="bg-[#e4d4cc] py-16 px-6 text-center">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 data-aos="slide-up" className="text-4xl md:text-5xl font-semibold text-gray-600 tracking-wide mb-4">
          <span  className="text-gray-500 hero-heading">MOOD</span>BOARD
        </h2>
        <p data-aos="slide-down" className="text-gray-600 text-base max-w-2xl mx-auto">
          The moodboard combines harmony of style and comfort, reflecting the brand’s philosophy
          of beauty and self-care. Inspired by natural shades and elegant textures, it highlights
          the salon’s unique services and creates an atmosphere of relaxation and luxury.
        </p>
      </div>

      {/* Mood Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Naturalness */}
        <div>
          <img
            src={service1}
            alt="Naturalness"
            data-aos="slide-up"
            className="rounded-lg object-cover w-full h-80 rounded-r-full shadow-2xl border mb-4"
          />
          <h4 className="text-lg font-medium text-[#5a3c2e]">NATURALNESS</h4>
        </div>

        {/* Care */}
        <div>
          <img
            src={service2}
            alt="Care"
            data-aos="slide-down"
            className="rounded-lg object-cover w-full h-80 rounded-r-full shadow-2xl border mb-4"
          />
          <h4 className="text-lg font-medium text-[#5a3c2e]">CARE</h4>
        </div>

        {/* Atmosphere */}
        <div>
          <img
            src={service3}
            alt="Atmosphere"
            data-aos="slide-up"
            className="rounded-lg object-cover w-full h-80 rounded-r-full shadow-2xl border mb-4"
          />
          <h4 className="text-lg font-medium text-[#5a3c2e]">ATMOSPHERE</h4>
        </div>

        {/* Transformation */}
        <div>
          <img
            src={service4}
            alt="Transformation"
            data-aos="slide-down"
            className="rounded-lg object-cover w-full h-80 rounded-r-full shadow-2xl border mb-4"
          />
          <h4 className="text-lg font-medium text-[#5a3c2e]">TRANSFORMATION</h4>
        </div>
      </div>
    </div>
  );
}
