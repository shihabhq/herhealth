"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceIcon from "@/components/ServiceIcon";

const services = [
  {
    id: "cervical",
    name: "Cervical Cancer Screening",
    price: 1800,
    grid: "1",
  },
  {
    id: "sti",
    name: "STI Screening",
    price: 1400,
    grid: "1",
  },
  {
    id: "endometrial",
    name: "Endometrial Health",
    price: 1600,
    grid: "1",
  },
  {
    id: "diabetes",
    name: "Diabetes A1C",
    price: 800,
    grid: "1",
  },
  {
    id: "full",
    name: "Full Package",
    price: 5000,
    grid: "2",
  },
];

export default function Services() {
  const { addItem } = useCart();
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleToggleService = (serviceId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedItems(newSelected);
  };

  const router = useRouter();

  const handleProceedToCheckout = () => {
    selectedItems.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        addItem({
          id: service.id,
          name: service.name,
          price: service.price,
          icon: service.id,
        });
      }
    });
    setSelectedItems(new Set());
    router.push("/checkout");
  };

  const isSelected = selectedItems.size > 0;

  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-2xl mb-6 sm:text-5xl">
              Select Reproductive Health Screening Tests
            </h1>
            <p className="text-center text-sm sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Choose one or more health screening tests. You can select
              individual tests or get our comprehensive full package.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleToggleService(service.id)}
                  className={`p-4 sm:p-8 rounded-lg cursor-pointer transition-all border-2 ${
                    service.grid === "2" ? "col-span-2" : "col-span-1"
                  } ${
                    selectedItems.has(service.id)
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-neutral-200 bg-white hover:border-primary"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3 sm:mb-4 text-primary">
                        <ServiceIcon
                          iconId={service.id}
                          className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-neutral-900">
                        {service.name}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                        {service.price} BDT
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        selectedItems.has(service.id)
                          ? "border-primary bg-primary"
                          : "border-neutral-300"
                      }`}
                    >
                      {selectedItems.has(service.id) && (
                        <span className="text-white font-bold">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={handleProceedToCheckout}
                disabled={!isSelected}
                className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-base ${
                  isSelected
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                }`}
              >
                Proceed to Checkout ({selectedItems.size})
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-8 sm:mb-16 text-xl sm:text-3xl">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: 1,
                  title: "Select Tests",
                  description: "Choose the health screening tests you want.",
                },
                {
                  step: 2,
                  title: "Proceed to Checkout",
                  description: "Review your selections and confirm your order.",
                },
                {
                  step: 3,
                  title: "Complete Payment",
                  description: "Securely pay for your health screening tests.",
                },
                {
                  step: 4,
                  title: "Sample Pickup",
                  description:
                    "A rider will contact you to collect your sample.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6 sm:mb-12 text-xl sm:text-3xl">About Our Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="p-4 sm:p-8 rounded-lg bg-neutral-50">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-neutral-900">
                  Non-Invasive
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  All tests use our proprietary Q-Pad technology for
                  comfortable, non-invasive sample collection during your
                  menstrual cycle.
                </p>
              </div>
              <div className="p-4 sm:p-8 rounded-lg bg-neutral-50">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-neutral-900">
                  Accurate Results
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Clinically validated biomarker analysis provides reliable
                  health insights for early detection and preventive care.
                </p>
              </div>
              <div className="p-4 sm:p-8 rounded-lg bg-neutral-50">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-neutral-900">
                  Privacy Protected
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Your health data is completely secure with enterprise-grade
                  encryption and full compliance with privacy regulations.
                </p>
              </div>
              <div className="p-4 sm:p-8 rounded-lg bg-neutral-50">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-neutral-900">
                  Fast Delivery
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Quick sample pickup and analysis. Results typically available
                  within 5-7 business days of sample receipt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
