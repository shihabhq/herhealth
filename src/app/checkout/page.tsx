"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ServiceIcon from "@/components/ServiceIcon";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function Checkout() {
  const { items, total, removeItem } = useCart();
  const router = useRouter();
  const validationWarningRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    uniqueCode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showValidationWarning, setShowValidationWarning] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        return !/^[+]?[0-9]{10,}$/.test(value.replace(/\s/g, ""))
          ? "Please enter a valid phone number"
          : "";
      case "address":
        return value.trim().length < 5
          ? "Address must be at least 5 characters"
          : "";
      case "uniqueCode":
        return value.trim().length === 0
          ? "Unique code from napkin pack is required"
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setShowValidationWarning(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = () => {
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<string, boolean>
    );
    setTouched(allTouched);

    if (!validateForm()) {
      setShowValidationWarning(true);
      setTimeout(() => validationWarningRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      return;
    }
    setShowValidationWarning(false);
    sessionStorage.setItem("orderData", JSON.stringify(formData));
    router.push("/payment");
  };

  if (items.length === 0) {
    return (
      <>
        <main className="flex flex-col min-h-screen">
          <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-md">
              <div className="text-5xl mb-6">🛒</div>
              <h1 className="mb-4">Your Cart is Empty</h1>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Select some health screening tests from our services page to get
                started.
              </p>
              <Link
                href="/services"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
              >
                Browse Services
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl mb-2 sm:mb-4 sm:text-5xl">Checkout</h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600">
              Review your selected tests and complete your information
            </p>
          </div>
        </section>

        <section className="flex-1 py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {showValidationWarning && (
              <div
                ref={validationWarningRef}
                role="alert"
                className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm sm:text-base"
              >
                <strong>Please complete all required fields</strong> before
                proceeding to payment. Check the form for any missing or invalid
                information.
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="mb-8 sm:mb-12">
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <ServiceIcon
                            iconId={item.icon}
                            className="w-8 h-8 shrink-0 text-primary"
                          />
                          <div>
                            <h3 className="font-semibold text-neutral-900">
                              {item.name}
                            </h3>
                            <p className="text-primary font-bold">
                              {item.price} BDT
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-400 hover:text-primary transition-colors"
                          aria-label="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Billing Information */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Information</h2>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="uniqueCode"
                        className="block text-sm font-semibold mb-2 text-neutral-900"
                      >
                        Unique Code{" "}
                        <span className="text-primary">(from napkin pack)</span>
                      </label>
                      <input
                        type="text"
                        id="uniqueCode"
                        name="uniqueCode"
                        value={formData.uniqueCode}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                          errors.uniqueCode && touched.uniqueCode
                            ? "border-red-500 bg-red-50 focus:border-red-500"
                            : "border-neutral-200 focus:border-primary"
                        }`}
                        placeholder="Enter the unique code printed on your napkin pack"
                      />
                      {errors.uniqueCode && touched.uniqueCode && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.uniqueCode}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2 text-neutral-900"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                          errors.name && touched.name
                            ? "border-red-500 bg-red-50 focus:border-red-500"
                            : "border-neutral-200 focus:border-primary"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2 text-neutral-900"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                          errors.email && touched.email
                            ? "border-red-500 bg-red-50 focus:border-red-500"
                            : "border-neutral-200 focus:border-primary"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2 text-neutral-900"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                          errors.phone && touched.phone
                            ? "border-red-500 bg-red-50 focus:border-red-500"
                            : "border-neutral-200 focus:border-primary"
                        }`}
                        placeholder="+880 1234567890"
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold mb-2 text-neutral-900"
                      >
                        Delivery Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none resize-none transition-colors ${
                          errors.address && touched.address
                            ? "border-red-500 bg-red-50 focus:border-red-500"
                            : "border-neutral-200 focus:border-primary"
                        }`}
                        rows={3}
                        placeholder="Your full address"
                      />
                      {errors.address && touched.address && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* Order Total */}
              <div>
                <div className="sticky top-20 bg-neutral-50 p-4 sm:p-8 rounded-lg border border-neutral-200">
                  <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Order Total</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-neutral-600">
                      <span>Subtotal</span>
                      <span>{total} BDT</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">{total} BDT</span>
                    </div>
                  </div>
                  <button
                    onClick={handleProceedToPayment}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold mb-3"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
