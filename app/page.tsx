import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative py-16 sm:py-24 bg-[url('/hero_bg.jpg')] bg-cover bg-[top_80%_left_100%] bg-no-repeat overflow-hidden">
          <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="max-w-lg">
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 [text-shadow:0_1px_2px_rgba(255,255,255,0.55)]">
                  Stop juggling 3 apps for 1 body
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-950 mb-6 text-balance">
                  One AI coach for every sport. One plan that adapts to your recovery, daily.
                </h1>
                <p className="text-lg text-gray-900 mb-8 text-balance [text-shadow:0_1px_2px_rgba(255,255,255,0.45)]">
                  Hiking in March. MTB in May. Triathlon in July. coach-al builds one unified plan across all your sports, reads your sleep and HRV each morning, and adjusts today&apos;s session. No spreadsheets. No guessing.
                </p>
                <div className="max-w-md">
                  <WaitlistForm />
                  <p className="mt-3 text-sm text-gray-700 [text-shadow:0_1px_2px_rgba(255,255,255,0.45)]">
                    Early adopter price — €29/mo at public launch. No credit card. Cancel anytime.
                  </p>
                  <p className="mt-1 text-xs text-gray-600 [text-shadow:0_1px_2px_rgba(255,255,255,0.45)]">
                    By joining, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-gray-900">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="mt-10 flex justify-center md:block md:mt-0 md:absolute md:-right-64 md:top-1/2 md:-translate-y-1/2">
                <img src="/mockup.png" alt="coach-al app mockup" className="w-72 md:w-[700px] drop-shadow-2xl rotate-[14deg]" />
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section — "Sound familiar?" */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Sound familiar?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              You&apos;ve tried the apps. Here&apos;s what keeps going wrong.
            </p>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">Three apps, one body</p>
                <p className="text-gray-600 text-sm">
                  Your cycling app doesn&apos;t know you did squats yesterday. Your running app doesn&apos;t know you race in 15 days. You&apos;re the only one connecting the dots.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">Miss 5 days? Plan doesn&apos;t care.</p>
                <p className="text-gray-600 text-sm">
                  You get sick. The plan picks up where you &quot;should&quot; be, not where you actually are. Static plans punish real life.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">47 metrics. Zero answers.</p>
                <p className="text-gray-600 text-sm">
                  Your watch says you&apos;re tired. Great. Now what? CTL, ATL, TSB, HRV — none of it tells you what to do today.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">15 hours a week? Not your life.</p>
                <p className="text-gray-600 text-sm">
                  Most plans assume you can train like a pro. You have a job, kids, and 7–10 hours at best. Where&apos;s the plan that fits?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              How coach-al works
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Three steps. One plan. Every sport covered.
            </p>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
              <div className="text-center px-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Add your events
                </h3>
                <p className="text-gray-600">
                  GR221 in March, MTB race in May, triathlon in July? Add them all. coach-al auto-phases your training — works backward from each date, across sports, in one plan.
                </p>
              </div>
              <div className="text-center px-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Connect your watch
                </h3>
                <p className="text-gray-600">
                  Garmin, Apple Watch, Polar, Wahoo — coach-al reads your sleep, HRV, training load, and readiness score every morning. Real data, not questionnaires.
                </p>
              </div>
              <div className="text-center px-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wake up. See today&apos;s session. Done.
                </h3>
                <p className="text-gray-600">
                  One screen. One session. Adjusted for how you actually recovered. No spreadsheets, no PMC charts, no calculating.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Demo Section — "See what changes" */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              See what changes
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Panel 1 — Good sleep */}
              <div className="bg-white border border-green-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-green-50 px-5 py-3 border-b border-green-200">
                  <p className="text-sm font-semibold text-green-800">😴 You slept well</p>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 font-medium">Wednesday</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">Threshold Run · 55 min</p>
                  <p className="text-sm text-gray-600 mt-1">4 × 8 min at tempo pace</p>
                  <p className="text-xs text-gray-500 mt-2">Goal: Build lactate threshold</p>
                </div>
              </div>
              {/* Panel 2 — Poor sleep */}
              <div className="bg-white border border-amber-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-amber-50 px-5 py-3 border-b border-amber-200">
                  <p className="text-sm font-semibold text-amber-800">😵 You slept 4 hours</p>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 font-medium">Wednesday</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">Easy Run · 40 min</p>
                  <p className="text-sm text-gray-600 mt-1">Zone 2, conversational pace</p>
                  <div className="bg-amber-50 border border-amber-200 rounded p-2 mt-3">
                    <p className="text-xs text-amber-800">⚡ Adjusted: Poor sleep detected. Tempo moved to Friday.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 max-w-xl mx-auto">
              Same day, different recovery. coach-al doesn&apos;t just track your data — it changes your plan.
            </p>
          </div>
        </section>

        {/* Proof of Concept — Founder + Events */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                Built by an athlete, for athletes
              </h2>

              {/* Founder Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
                <p className="text-gray-900">
                  <span className="font-semibold">Eduard, 40</span> — Father of four. Full-time job. University lecturer. Training 8–10 hours a week for 5 events across 5 sports in 2026. coach-al is the coach he needed and couldn&apos;t find.
                </p>
              </div>

              {/* Event Timeline */}
              <div className="space-y-2">
                <div className="flex items-start gap-4 py-4 pl-4 border-l-2 border-gray-200">
                  <span className="text-2xl" aria-hidden="true">🥾</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900">GR221 Mallorca</h3>
                      <span className="text-sm text-gray-500">March 25–28</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">4-day mountain trek through the Serra de Tramuntana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4 pl-4 border-l-2 border-gray-200">
                  <span className="text-2xl" aria-hidden="true">🚵</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900">Bike The Rock Enduro</h3>
                      <span className="text-sm text-gray-500">May 16</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">MTB enduro race — 5 stages, 200hm each</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4 pl-4 border-l-2 border-gray-200">
                  <span className="text-2xl" aria-hidden="true">🏊</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900">XTERRA France Sprint</h3>
                      <span className="text-sm text-gray-500">July 5</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Off-road triathlon — swim, mountain bike, trail run</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4 pl-4 border-l-2 border-gray-200">
                  <span className="text-2xl" aria-hidden="true">🏔️</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900">Watzmann Traverse</h3>
                      <span className="text-sm text-gray-500">July 15–20</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Alpine ridge crossing — exposed scrambling, multi-day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4 pl-4 border-l-2 border-gray-200">
                  <span className="text-2xl" aria-hidden="true">🚵</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-semibold text-gray-900">MTB Camp</h3>
                      <span className="text-sm text-gray-500">July 30 – Aug 2</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">4-day intensive riding camp</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-gray-900">
                  5 events. 5 sports. Under 10 hours a week. One AI coach.
                </p>
                <p className="text-gray-600 mt-2">
                  Every session, every adaptation, every result — shared publicly. Follow the build.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a
                    href="https://x.com/eduard_gruen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm"
                  >
                    Follow on X
                  </a>
                  <a
                    href="https://www.instagram.com/eduardgruen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition text-sm"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="bg-blue-600 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Early adopter spots open
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              €9/month, locked in forever. Price goes to €29 at public launch.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm buttonText="Claim Your Spot" />
            </div>
            <p className="mt-4 text-sm text-blue-200">
              Spring 2026 launch. Waitlist gets first access.
            </p>
          </div>
        </section>

        {/* Comparison Table — Named Competitors */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              How coach-al compares
            </h2>
            <div className="max-w-4xl mx-auto overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm p-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900"></th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-500">TrainingPeaks</th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-500">TrainerRoad</th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-500">Garmin Coach</th>
                    <th className="text-center py-3 px-3 font-semibold text-blue-600">coach-al</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-xs sm:text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-medium text-gray-900">Multi-sport unified plan</td>
                    <td className="text-center py-3 px-3">Manual only</td>
                    <td className="text-center py-3 px-3">Cycling-first</td>
                    <td className="text-center py-3 px-3">Per sport</td>
                    <td className="text-center py-3 px-3 font-medium text-blue-600">All sports, one plan</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-medium text-gray-900">Daily recovery adaptation</td>
                    <td className="text-center py-3 px-3">No</td>
                    <td className="text-center py-3 px-3">No</td>
                    <td className="text-center py-3 px-3">Basic</td>
                    <td className="text-center py-3 px-3 font-medium text-blue-600">HRV + sleep driven</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-medium text-gray-900">Strength-endurance integration</td>
                    <td className="text-center py-3 px-3">No</td>
                    <td className="text-center py-3 px-3">No</td>
                    <td className="text-center py-3 px-3">Basic</td>
                    <td className="text-center py-3 px-3 font-medium text-blue-600">Single fatigue model</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-medium text-gray-900">Event-driven periodization</td>
                    <td className="text-center py-3 px-3">Manual</td>
                    <td className="text-center py-3 px-3">Cycling events</td>
                    <td className="text-center py-3 px-3">Single goal</td>
                    <td className="text-center py-3 px-3 font-medium text-blue-600">Multiple events, auto-phased</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-medium text-gray-900">Time-constrained planning</td>
                    <td className="text-center py-3 px-3">No</td>
                    <td className="text-center py-3 px-3">Partial</td>
                    <td className="text-center py-3 px-3">Partial</td>
                    <td className="text-center py-3 px-3 font-medium text-blue-600">Built for &lt;10h/week</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Price</td>
                    <td className="text-center py-3 px-3">€12–20/mo</td>
                    <td className="text-center py-3 px-3">€16/mo</td>
                    <td className="text-center py-3 px-3">Free (Garmin only)</td>
                    <td className="text-center py-3 px-3 font-bold text-blue-600">€9/mo (early adopter)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQ
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What about Garmin Coach? It&apos;s free.
                </h3>
                <p className="text-gray-600">
                  Garmin Coach creates single-sport plans with basic adaptation. It can&apos;t coordinate your hike prep, MTB training, and strength work into one plan, and it doesn&apos;t adjust today&apos;s session based on last night&apos;s sleep. coach-al does.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Does this replace a human coach?
                </h3>
                <p className="text-gray-600">
                  For multi-sport athletes training under 10 hours a week, yes. A cycling coach costs €200/mo. A running coach costs €150/mo. A strength coach costs €100/mo. coach-al covers all three for €9/mo as an early adopter.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How does daily adaptation work?
                </h3>
                <p className="text-gray-600">
                  Every morning, coach-al reads your recovery data (HRV, sleep, readiness). If you slept poorly, today&apos;s tempo run becomes an easy recovery session. The missed intensity gets rescheduled — not lost. The plan adapts to your life, not the other way around.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  When does it launch?
                </h3>
                <p className="text-gray-600">
                  Early access launches spring 2026. Waitlist members get first access and the €9/month early adopter price locked forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your coach is almost ready.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              One plan. Every sport. Adapts daily to your recovery. Join the waitlist to lock in €9/month — forever.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm buttonText="Claim Your Early Adopter Spot" />
              <p className="mt-3 text-sm text-gray-500">
                €29/mo at public launch. No credit card required. Cancel anytime.
              </p>
              <p className="mt-1 text-xs text-gray-400">
                By joining, you agree to our{" "}
                <Link href="/privacy" className="underline hover:text-gray-600">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
