"use client";

import ServiceIcon from "@/components/ServiceIcon";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl mb-2 sm:mb-4 sm:text-5xl text-neutral-900">
              Transform menstrual blood into
              <br />
              <span className="text-primary">medical breakthroughs</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              We are enabling women worldwide to access preventive health
              insights through innovative biomarker analysis of menstrual blood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-semibold"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-neutral-50 transition-colors font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Health Conditions Section */}
        <section className="py-12 sm:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="mb-3 sm:mb-4 text-neutral-900 text-xl sm:text-4xl">
                Screen for Multiple Conditions
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive health screening covering various reproductive
                health concerns and systemic conditions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Diabetes A1C", icon: "🩺", id: "diabetes" },
                { name: "Cervical Cancer", icon: "🎀", id: "cervical" },
                { name: "Endometriosis", icon: "❤️", id: "endometrial" },
                { name: "STI Screening", icon: "🔬", id: "sti" },
              ].map((condition) => (
                <div
                  key={condition.name}
                  className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                    <ServiceIcon
                      iconId={condition.id}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-neutral-900 text-base sm:text-lg">
                    {condition.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The heRpad Section */}
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div>
                <h2 className="mb-6 sm:mb-8 text-neutral-900 text-xl sm:text-4xl">
                  A pad with a purpose.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                  The heRpad is the first and only FDA-cleared diagnostic
                  menstrual pad, enabling non-invasive health monitoring by
                  collecting and analyzing biomarkers directly from menstrual
                  blood.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "First FDA-cleared diagnostic menstrual pad",
                    "Non-invasive and privacy-preserving",
                    "Detects multiple biomarkers",
                    "Clinically validated results",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary font-bold text-xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-neutral-600 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
              <div className=" from-primary/5 to-accent/5 rounded-lg p-8 sm:p-12 aspect-square flex items-center justify-center border border-neutral-200">
                <img src="/pad.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Science Section */}
        <section className="py-12 sm:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4">
                Research-Backed Innovation
              </p>
              <h2 className="mb-6 text-neutral-900">
                Biomarker science meets women&apos;s health
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Our menstrual blood analysis reveals multiple biomarkers that
                enable non-invasive diagnosis and monitoring of reproductive and
                systemic health conditions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Innovative Science",
                  description:
                    "Cutting-edge biomarker analysis using menstrual blood to enable preventive health screening.",
                },
                {
                  title: "Privacy Protected",
                  description:
                    "Your health data is secured with enterprise-grade encryption and full compliance with privacy regulations.",
                },
                {
                  title: "Empowering Women",
                  description:
                    "We believe every woman deserves access to advanced health insights and comprehensive preventive care.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 bg-white rounded-lg border border-neutral-200"
                >
                  <h3 className="font-serif font-bold mb-3 text-neutral-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA Section */}
        <section className="py-12 sm:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white mb-4 sm:mb-6 text-xl sm:text-4xl">
              Transform Your Health Today
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 opacity-95 leading-relaxed max-w-2xl text-white mx-auto">
              Order your heRpad and get comprehensive health insights with a
              simple, non-invasive test. Join thousands of women taking control
              of their health.
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-white text-primary rounded-full hover:bg-neutral-100 transition-colors font-semibold"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
