"use client";

import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="text-center max-w-2xl w-full">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">✓</div>

            <h1 className="mb-6 sm:mb-8 text-xl sm:text-4xl">
              Your Test Booking is Confirmed
            </h1>

            <div className="bg-primary/5 border-2 border-primary rounded-lg p-4 sm:p-8 mb-8 sm:mb-12">
              <p className="text-sm sm:text-lg text-neutral-900 leading-relaxed font-semibold">
                A rider will contact you as soon as possible to pick your
                sample.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 sm:p-8 mb-8 sm:mb-12 text-left">
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-neutral-900">
                Next Steps:
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-3 sm:gap-4">
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                      Wait for Rider Contact
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      A rider will call or message you within 2-4 hours to
                      schedule sample pickup.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                      Sample Collection
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      Use the heRpad kit as instructed during your menstrual
                      cycle and keep it ready for pickup.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                      Lab Analysis
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      Your sample will be analyzed at our lab within 5-7
                      business days.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                      Results Ready
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      Receive your comprehensive health report via email with
                      personalized insights.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
                <p className="text-xs sm:text-sm font-semibold text-green-900 mb-1">
                  Email Confirmation
                </p>
                <p className="text-xs text-green-800">
                  A confirmation email has been sent to your inbox with booking
                  details.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                  Track Status
                </p>
                <p className="text-xs text-blue-800">
                  You can track your test status from your account dashboard
                  anytime.
                </p>
              </div>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:space-x-0">
              <Link
                href="/"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-center"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-primary text-primary rounded-lg hover:bg-neutral-50 transition-colors font-semibold text-center sm:ml-3"
              >
                Order More Tests
              </Link>
            </div>

            <p className="text-neutral-600 text-xs sm:text-sm mt-8 sm:mt-12">
              For support, contact us at{" "}
              <span className="font-semibold">support@herhealth.com</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
