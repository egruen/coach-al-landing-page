import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              Train for real events — with an AI coach that adapts to your life.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-balance">
              Coach Al turns your training data into clear daily guidance, adjusts to recovery, and keeps you progressing without guesswork.
            </p>
            <WaitlistForm variant="hero" />
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why most training plans fail
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                Most plans are static. Life isn't.<br />
                You miss a session, sleep badly, or overload your week — and the plan keeps pushing anyway.
              </p>
              <p>
                Athletes train for events, not generic goals.<br />
                You need coaching that reacts to what actually happens.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              How Coach Al works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Set your event
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pick your target: race, multi-day hike, cycling event, or personal challenge.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Connect your data
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Coach Al reads your training and recovery signals (like sleep, HRV, and effort trends).
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Get adaptive coaching
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive practical daily guidance and weekly adjustments based on your real progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Built for adaptive performance
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Event-driven planning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Train for the event on your calendar — not a one-size-fits-all template.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Adapts to recovery
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  When fatigue rises, Coach Al adjusts load before overtraining hits.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Clear next actions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No dashboard paralysis. You get concrete "do this today" guidance.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Multi-sport ready
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Running, cycling, hiking, and strength in one coherent training logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              FAQ
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Is this a replacement for a human coach?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Coach Al handles structured planning and adaptive load decisions. It's designed to make high-quality coaching more accessible — and can also complement human coaching.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Is this just another static training plan?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No. Coach Al is built to adapt when your week changes, recovery drops, or execution differs from plan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Which sports are supported?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Initial focus is endurance and mountain-oriented training: running, cycling, hiking, and strength support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What data do you use?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Training and recovery-related signals needed to personalize your plan. Data is used for coaching functionality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  When does access open?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're currently onboarding early users via waitlist. Join now to get launch updates and early access priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-blue-600 dark:bg-blue-700 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Be first to try Coach Al
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the waitlist for early access and launch updates.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm variant="cta" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
