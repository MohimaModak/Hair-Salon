import React from "react";

export default function Problem() {
  const problems = [
    {
      title: "Hair Fall",
      description:
        "Excessive hair shedding can be caused by stress, poor diet, hormonal imbalance, or wrong products. It’s one of the most common concerns.",
      solution: "We offer scalp treatments, nourishing hair masks, and consultations to identify the root cause."
    },
    {
      title: "Dry & Frizzy Hair",
      description:
        "Lack of moisture or heat damage can make hair dry, brittle, and hard to manage.",
      solution: "Our deep conditioning, keratin smoothing, and moisture-rich treatments restore shine and softness."
    },
    {
      title: "Dandruff & Itchy Scalp",
      description:
        "Flaking, irritation, and itchiness often come from product build-up or scalp infections.",
      solution: "We provide anti-dandruff treatments, detox scalp scrubs, and advice on the right hair care routine."
    },
    {
      title: "Split Ends",
      description:
        "Split ends are a sign of hair breakage and damage caused by heat tools or infrequent trims.",
      solution: "We recommend regular trimming, nourishing masks, and protective styling."
    },
  ];

  return (
    <section id="/Problem" className="bg-[#e4d4cc] py-10 p-5 md:p-10 lg:p-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="slide-down" className='text-4xl md:text-6xl  font-bold hero-heading text-gray-600 mb-6'>
          Common Hair Problems We Treat
        </h2>
        <p data-aos="slide-down" className="text-gray-600 text-base max-w-2xl mx-auto mb-12">
          Healthy hair starts with understanding the issue. Here are some of the most common hair and scalp concerns our clients face — and how we help solve them.
        </p>

        <div data-aos="slide-up" className="grid md:grid-cols-2 gap-8 text-left">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-300/50 backdrop-blur-3xl border border-gray-600 p-6 rounded-xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg mb-3">{item.description}</p>
              <p className="text-sm text-gray-600 font-medium">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
