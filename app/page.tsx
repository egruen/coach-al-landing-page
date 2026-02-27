import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[600px] flex items-center bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage:
              /*"url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')",*/
              "url('/hero_bg.jpg')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white"></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
                Train for real events — with an AI coach that adapts to your
                life.
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-balance drop-shadow-md">
                Coach Al turns your training data into clear daily guidance,
                adjusts to recovery, and keeps you progressing without
                guesswork.
              </p>
              <WaitlistForm variant="hero" />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why most training plans fail
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                Most plans are static. Life isn't.
                <br />
                You miss a session, sleep badly, or overload your week — and the
                plan keeps pushing anyway.
              </p>
              <p>
                Athletes train for events, not generic goals.
                <br />
                You need coaching that reacts to what actually happens.
              </p>
            </div>
          </div>
        </section>

        {/* Build in Public Banner */}
        <section className="bg-blue-50 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built in public. Every session tracked.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow the full journey — what the AI prescribes, what actually
              happens, and what gets adapted along the way. Real training, real
              data, no filter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://x.com/eduard_gruen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition text-sm shadow-sm"
              >
                Follow on X
              </a>
              <a
                href="https://www.instagram.com/eduardgruen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition text-sm shadow-sm"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              How Coach Al works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Set your event
                </h3>
                <p className="text-gray-600">
                  Pick your target: race, multi-day hike, cycling event, or
                  personal challenge.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Connect your data
                </h3>
                <p className="text-gray-600">
                  Coach Al reads your training and recovery signals (like sleep,
                  HRV, and effort trends).
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Get adaptive coaching
                </h3>
                <p className="text-gray-600">
                  Receive practical daily guidance and weekly adjustments based
                  on your real progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Built for adaptive performance
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Event-driven planning
                </h3>
                <p className="text-gray-600">
                  Train for the event on your calendar — not a one-size-fits-all
                  template.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Adapts to recovery
                </h3>
                <p className="text-gray-600">
                  When fatigue rises, Coach Al adjusts load before overtraining
                  hits.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Clear next actions
                </h3>
                <p className="text-gray-600">
                  No dashboard paralysis. You get concrete "do this today"
                  guidance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multi-sport ready
                </h3>
                <p className="text-gray-600">
                  Running, cycling, hiking, and strength in one coherent
                  training logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQ
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is this a replacement for a human coach?
                </h3>
                <p className="text-gray-600">
                  Coach Al handles structured planning and adaptive load
                  decisions. It's designed to make high-quality coaching more
                  accessible — and can also complement human coaching.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is this just another static training plan?
                </h3>
                <p className="text-gray-600">
                  No. Coach Al is built to adapt when your week changes,
                  recovery drops, or execution differs from plan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Which sports are supported?
                </h3>
                <p className="text-gray-600">
                  Initial focus is endurance and mountain-oriented training:
                  running, cycling, hiking, and strength support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What data do you use?
                </h3>
                <p className="text-gray-600">
                  Training and recovery-related signals needed to personalize
                  your plan. Data is used for coaching functionality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  When does access open?
                </h3>
                <p className="text-gray-600">
                  We're currently onboarding early users via waitlist. Join now
                  to get launch updates and early access priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-blue-600 py-16 sm:py-24">
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
