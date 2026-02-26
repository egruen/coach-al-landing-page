"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setErrorMessage("Please accept the privacy policy to continue.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to join waitlist");
    }
  };

  if (status === "success") {
    return (
      <div className={`${variant === "hero" ? "max-w-md mx-auto" : ""}`}>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
          <p className="text-green-800 dark:text-green-200 font-medium">
            You're in. We'll contact you when early access opens.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${variant === "hero" ? "max-w-md mx-auto" : ""}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : variant === "hero" ? "Get Early Access" : "Join Waitlist"}
        </button>
      </div>
      
      <div className="mt-3">
        <label className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={status === "loading"}
            className="mt-0.5 cursor-pointer"
            required
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 underline">
              Privacy Policy
            </Link>
          </span>
        </label>
      </div>

      {errorMessage && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      {variant === "hero" && (
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-500 text-center">
          No spam. Early access only.
        </p>
      )}
    </form>
  );
}
