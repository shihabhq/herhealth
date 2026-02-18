"use client";

import Image from "next/image";

const founders = [
  {
    name: "Sadman Walid",
    title: "CEO",
    position: "CEO",
    bio: "Visionary leader driving heRhealth's mission to revolutionize women's health through innovative diagnostic solutions.",
    expertise: ["Leadership", "Strategic Vision", "Healthcare Innovation"],
  },
  {
    name: "Zarin Nudar Shaki",
    title: "COO",
    position: "CMO",
    bio: "Marketing strategist building heRhealth's brand and expanding our reach.",
    expertise: ["Marketing", "Brand Strategy", "Communications"],
  },
  {
    name: "Saminul Islam",
    title: "CFO",
    position: "COO",
    bio: "Operations expert ensuring seamless execution of our vision and scaling heRhealth's impact across markets.",
    expertise: ["Operations", "Scaling", "Business Development"],
  },
  {
    name: "Ahad Ahmed",
    title: "CMO",
    position: "CFO",
    bio: "Financial expert managing heRhealth's capital and strategic investments.",
    expertise: ["Finance", "Capital Management", "Strategic Planning"],
  },
  {
    name: "Shihab Haque",
    title: "CTO",
    position: "CTO",
    bio: "Technology innovator leading the development of our cutting-edge diagnostic platform and biomarker analysis.",
    expertise: ["Technology", "Engineering", "Product Development"],
  },
];

export default function Founders() {
  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-3 sm:mb-4 text-2xl sm:text-4xl">
              Our Leadership Team
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
              Experienced leaders united by a mission to transform women&apos;s
              health through innovation and impact.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-10 sm:py-20 bg-white">
          <div className=" max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="rounded-lg overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow bg-white"
                >
                  {/* Founder photo – square aspect, centered */}
                  <div className="w-full aspect-square relative bg-neutral-100">
                    <Image
                      src={`/${founder.title.toLowerCase()}.png`}
                      alt={founder.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-semibold text-base mb-2">
                      {founder.position}
                    </p>
                    <p className="text-neutral-600 text-sm mb-3 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-10 sm:py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-8 sm:mb-16 text-xl sm:text-3xl">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We push boundaries to create breakthrough solutions in women's health.",
                },
                {
                  title: "Equity",
                  description:
                    "Every woman deserves access to advanced healthcare, regardless of background.",
                },
                {
                  title: "Integrity",
                  description:
                    "We operate with transparency, honesty, and scientific rigor in all we do.",
                },
                {
                  title: "Empowerment",
                  description:
                    "We give women tools and knowledge to take control of their health.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-4 sm:p-6 bg-white rounded-lg"
                >
                  <h3 className="font-bold text-neutral-900 mb-2 text-sm sm:text-base">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        {/* <section className="py-10 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-6 sm:mb-12 text-xl sm:text-3xl">Supported by Leading Advisors</h2>
            <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed text-sm sm:text-base">
              Our advisory board includes recognized leaders in reproductive
              health, biomedical engineering, and healthcare innovation from top
              academic institutions and medical centers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {[
                "Stanford Medicine",
                "MIT Media Lab",
                "Johns Hopkins Medicine",
                "National Institutes of Health",
                "Harvard Medical School",
                "UC Berkeley",
                "Mayo Clinic",
                "CDC Foundation",
              ].map((org) => (
                <div
                  key={org}
                  className="p-3 sm:p-4 rounded-lg border border-neutral-200 text-center text-neutral-600 font-semibold text-xs sm:text-sm"
                >
                  {org}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Join Us */}
        <section className="py-10 sm:py-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-3xl">
              Join Us on Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
              We&apos;re hiring talented individuals who share our passion for
              women&apos;s health innovation. Explore careers at heRhealth.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
