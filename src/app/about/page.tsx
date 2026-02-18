"use client";

export default function About() {
  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl mb-2 sm:mb-4 sm:text-6xl">
              About heRhealth
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
              We&apos;re transforming women&apos;s health by unlocking the
              diagnostic potential of menstrual blood through innovation,
              science, and advocacy.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-10 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="mb-4 sm:mb-6 text-xl sm:text-3xl">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-4">
                  To empower women worldwide with accessible, accurate health
                  insights through innovative menstrual blood biomarker
                  analysis.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We believe that every woman deserves access to advanced
                  preventive health screening, regardless of socioeconomic
                  status or geography.
                </p>
              </div>
              <div>
                <h2 className="mb-4 sm:mb-6 text-xl sm:text-3xl">Our Vision</h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-4">
                  To revolutionize women&apos;s healthcare by creating the
                  world&apos;s most comprehensive menstrual blood diagnostic
                  platform.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  A future where early detection and preventive care are
                  accessible to every woman, transforming health outcomes
                  globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-10 sm:py-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 sm:mb-12 text-center text-xl sm:text-3xl">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                heRhealth was founded on the observation that menstrual blood is
                an untapped resource for health insights. For years, researchers
                recognized the diagnostic potential locked within this
                biological sample, yet no one had created a practical way to
                harness it.
              </p>
              <p>
                Our founding team—composed of scientists, healthcare innovators,
                and women&apos;s health advocates—came together with a shared
                vision: to make non-invasive health screening accessible and
                empowering for women everywhere.
              </p>
              <p>
                Through years of rigorous research and development, we created
                the heRpad, the first FDA-cleared diagnostic menstrual pad. This
                breakthrough innovation enables women to collect valuable health
                data passively, in the comfort and privacy of their own homes.
              </p>
            </div>
          </div>
        </section>

        {/* The Science */}
        <section className="py-10 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="mb-3 sm:mb-4 text-xl sm:text-3xl">
                The Science Behind Our Innovation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
                Menstrual blood is a rich source of biomarkers that reflect a
                woman&apos;s overall health status, from hormonal balance to
                immune function to tissue health.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: "Comprehensive Biomarkers",
                  description:
                    "Our platform analyzes over 50+ distinct biomarkers to provide actionable health insights.",
                },
                {
                  title: "Non-Invasive Collection",
                  description:
                    "Unlike traditional blood tests, our heRpad enables passive, convenient sampling without medical intervention.",
                },
                {
                  title: "Clinical Validation",
                  description:
                    "All findings are clinically validated through peer-reviewed research and rigorous testing protocols.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-8 rounded-lg bg-neutral-50"
                >
                  <h3 className="font-semibold mb-2 sm:mb-3 text-neutral-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Highlight */}
        <section className="py-10 sm:py-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-3xl">
              Backed by Experts
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-8 sm:mb-12 leading-relaxed">
              Our team brings together world-class expertise in biomedical
              engineering, reproductive health, data science, and healthcare
              innovation.
            </p>
            <a
              href="/founders"
              className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
            >
              Meet Our Team
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
