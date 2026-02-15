"use client";

import { useCart } from "@/context/CartContext";
import ServiceIcon from "@/components/ServiceIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Banknote, CreditCard, Smartphone } from "lucide-react";

type PaymentMethodType = "cash" | "bkash" | "nagad" | "card";

const PAYMENT_METHODS: {
  id: PaymentMethodType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "cash",
    label: "Cash on Delivery",
    icon: Banknote,
  },
  {
    id: "bkash",
    label: "bKash",
    icon: Smartphone,
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    icon: CreditCard,
  },
];

export default function Payment() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>("cash");
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompletePayment = async () => {
    if (paymentMethod === "card") {
      if (
        !formData.cardName ||
        !formData.cardNumber ||
        !formData.expiry ||
        !formData.cvv
      ) {
        alert("Please fill in all card details");
        return;
      }
    }

    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);

    // Clear cart and redirect to confirmation
    clearCart();
    router.push("/confirmation");
  };

  if (items.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-md">
          <h1 className="text-xl sm:text-2xl mb-4">No Items to Pay For</h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-4 mb-8">
            Your cart is empty. Please go back and select some tests.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl mb-2">Payment</h1>
          <p className="text-neutral-600 text-sm sm:text-base">
            Complete your payment to confirm your test booking
          </p>
        </div>
      </section>

      <section className="flex-1 py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              {/* Order Items Summary */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Order Summary</h2>
                  <div className="space-y-3 bg-neutral-50 p-4 sm:p-6 rounded-lg border border-neutral-200 mb-6 sm:mb-8">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center gap-3"
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <ServiceIcon
                            iconId={item.icon}
                            className="w-8 h-8 shrink-0 text-primary"
                          />
                          <span className="text-neutral-900 font-medium text-sm sm:text-base truncate">
                            {item.name}
                          </span>
                        </span>
                        <span className="font-bold text-primary text-sm sm:text-base shrink-0">
                          {item.price} BDT
                        </span>
                      </div>
                    ))}
                    <div className="border-t border-neutral-200 pt-4 mt-4 flex justify-between font-bold text-base sm:text-lg">
                      <span>Total Amount</span>
                      <span className="text-primary">{total} BDT</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-8 sm:mb-12">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    Select Payment Method
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PAYMENT_METHODS.map((method) => {
                      const Icon = method.icon;
                      const isSelected = paymentMethod === method.id;
                      return (
                        <label
                          key={method.id}
                          className={`flex items-start gap-4 p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all hover:border-neutral-300 ${
                            isSelected
                              ? "border-primary bg-primary/5 shadow-sm"
                              : "border-neutral-200 bg-white"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={isSelected}
                            onChange={(e) =>
                              setPaymentMethod(e.target.value as PaymentMethodType)
                            }
                            className="sr-only"
                          />
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-primary text-white" : "bg-neutral-100 text-neutral-600"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-semibold text-neutral-900 block">
                              {method.label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Card Details (shown only for card payment) */}
                {paymentMethod === "card" && (
                  <div className="mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Card Details</h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="cardName"
                          className="block text-sm font-semibold mb-2 text-neutral-900"
                        >
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="Name on card"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="block text-sm font-semibold mb-2 text-neutral-900"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          maxLength={16}
                          className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="expiry"
                            className="block text-sm font-semibold mb-2 text-neutral-900"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            maxLength={5}
                            className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="cvv"
                            className="block text-sm font-semibold mb-2 text-neutral-900"
                          >
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={4}
                            className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Info messages per payment method */}
                {paymentMethod === "cash" && (
                  <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-900 font-semibold">Cash on Delivery</p>
                    <p className="text-green-800 text-sm mt-1">
                      Pay the rider in cash when they collect your sample. No advance payment needed.
                    </p>
                  </div>
                )}

                {paymentMethod === "bkash" && (
                  <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-[#E2136E]/10 border border-[#E2136E]/30 rounded-xl">
                    <p className="text-[#E2136E] font-semibold">bKash</p>
                    <p className="text-neutral-700 text-sm mt-1">
                      You will be redirected to the bKash payment gateway to complete the transaction securely.
                    </p>
                  </div>
                )}

              </div>

            {/* Payment Summary */}
            <div>
              <div className="sticky top-20 bg-neutral-50 p-6 sm:p-8 rounded-lg border border-neutral-200">
                <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Payment Summary</h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-neutral-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Items</span>
                      <span className="font-semibold">{items.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Subtotal</span>
                      <span className="font-semibold">{total} BDT</span>
                    </div>
                  </div>

                <div className="flex justify-between text-base sm:text-lg font-bold mb-6 sm:mb-8">
                  <span>Total</span>
                  <span className="text-primary">{total} BDT</span>
                </div>

                <button
                  onClick={handleCompletePayment}
                  disabled={isProcessing}
                  className="w-full px-6 py-3 text-sm sm:text-base bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Processing..." : "Complete Payment"}
                </button>

                <p className="text-xs text-neutral-600 text-center mt-4">
                  Your payment information is secure and encrypted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
