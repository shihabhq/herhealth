"use client";

export default function Why() {
  return (
    <>
      <main className="flex flex-col">
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl mb-2 sm:mb-4 sm:text-6xl">Why heRhealth</h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
              We combine clinical science, scalable engineering, and trusted AI
              to deliver fast, accurate, and accessible biomarker insights for
              women.
            </p>
          </div>
        </section>

        {/* AI Processing / MedGemma */}
        <section className="py-10 sm:py-20 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 sm:mb-12 text-center text-xl sm:text-3xl">
              AI Processing
            </h2>

            <div className="space-y-4 sm:space-y-6 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                For AI processing, heRhealth will use the MedGemma 27B LLM
                model, supported by Google DeepMind. MedGemma has strong
                acceptance in medical domains and benefits from extensive
                domain-specific medical training.
              </p>

              <h3 className="mt-4 font-semibold">How MedGemma is better</h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Accuracy is 87.7% in the MedQA medical exam benchmark.</li>
                <li>200+ biomarkers analyzed in milliseconds.</li>
                <li>
                  Analyzes full blood panels (e.g., Hb, ferritin) 10x faster
                  than many proprietary models.
                </li>
                <li>
                  API cost is on average $0.065, making it highly scalable for
                  startups.
                </li>
                <li>MedGemma is also open source.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
