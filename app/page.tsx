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
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-4">
              Built by an athlete, for athletes
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              One AI coach. Multiple goals.
              <br />
              Your real life.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-balance">
              Training for a spring hike, summer race, and autumn marathon? Coach&nbsp;Al handles it all — adapts to recovery, fits your schedule, no guesswork.
            </p>
            <WaitlistForm variant="hero" />
          </div>
        </section>

        {/* The Story — Social Proof */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                The real test
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
                Coach Al isn&apos;t a theory. It&apos;s being built and tested in public — by the founder training for 5 events across 5 sports in 5 months.
              </p>

              {/* Event Timeline */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <span className="text-2xl" aria-hidden="true">🥾</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">GR221 Mallorca</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-500">March 25–28</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">4-day hiking marathon through the Serra de Tramuntana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <span className="text-2xl" aria-hidden="true">🚵</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">Bike The Rock Enduro</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-500">May 16</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">MTB enduro race — 5 stages, 200hm each</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <span className="text-2xl" aria-hidden="true">🏊</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">XTERRA France Sprint</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-500">July 5</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Off-road triathlon — swim, mountain bike, trail run</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <span className="text-2xl" aria-hidden="true">🏔️</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">Watzmann Überschreitung</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-500">July 15–20</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Alpine ridge traverse — exposed scrambling, multi-day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <span className="text-2xl" aria-hidden="true">🚵</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">MTB Camp</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-500">July 30 – Aug 2</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">4-day intensive riding camp</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  5 events. 5 sports. Under 10 hours per week.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Every session, adaptation, and result shared publicly. Real data from a real athlete — no polished theory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why most training plans fail
            </h2>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Static plans</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  You miss a session, sleep badly, or overload your week — and the plan keeps pushing anyway.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Single-sport tunnel vision</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Most apps ask &quot;what&apos;s your sport?&quot; — but real life is messy. Multiple goals, limited time, zero room for guessing.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Pro-athlete assumptions</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  15-hour training weeks, twice-a-day sessions. Built for people without jobs or families.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Dashboard paralysis</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Charts everywhere, but no clear answer to: &quot;What should I do today?&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
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
                  Set your events
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Add your races, hikes, and challenges. Coach Al phases your training around each deadline — no overlapping chaos.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Connect your watch
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Garmin data flows in — sleep, HRV, training load. Coach Al reads your recovery state and adjusts before overtraining hits.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Follow today&apos;s session
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Wake up, check your phone, see exactly what to do. No guessing, no analysis — just train.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Built different
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🎯 Event-driven, not sport-locked
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You don&apos;t train &quot;for cycling.&quot; You train for a specific event on a specific date — then the system phases into the next one.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  ⏱️ Fits your life (not the other way around)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No 15-hour training weeks. Real plans for people with jobs and families. Under 10h/week — because if the plan can&apos;t survive real life, it&apos;s a bad plan.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🩺 Adapts to how you feel
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Garmin says you&apos;re wrecked? Coach Al adjusts today&apos;s workout. Because adaptation happens during recovery, not during the grind.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  💰 Multi-sport without the cost
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cycling coach: €200/mo. Running coach: €150/mo. Strength coach: €100/mo. Or one AI coach that handles all three.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Build in Public Banner */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built in public. Every session tracked.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Follow the full journey — what the AI prescribes, what actually happens, and what gets adapted along the way. Real training, real data, no filter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://x.com/e_gruen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition text-sm"
              >
                Follow on X
              </a>
              <a
                href="https://www.instagram.com/e_gruen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
              >
                Follow on Instagram
              </a>
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
                  Coach Al handles structured planning and adaptive load management. It makes quality coaching accessible — and can complement a human coach.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Is this just another static training plan?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No. Coach Al adapts when your week changes, recovery drops, or execution differs from plan. Static plans break. This one bends.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Which sports are supported?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Running, cycling, hiking, swimming, and strength. Built for endurance and mountain athletes who juggle multiple disciplines.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What data do you use?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Training and recovery signals from your Garmin watch — sleep, HRV, training load, Body Battery. Used only for coaching, nothing else.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  When does access open?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Early access starts in spring 2026. Join the waitlist now — first in line gets first access.
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
