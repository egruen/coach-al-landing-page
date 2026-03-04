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
              Stop juggling 3 apps for 1 body
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              One AI coach for all your sports.
              <br />
              One plan that adapts daily.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-balance">
              Hike in March, race in May, tri in July? Coach&nbsp;Al builds one plan across every sport — and changes today&apos;s session based on how you actually slept last night.
            </p>
            <WaitlistForm variant="hero" />
          </div>
        </section>

        {/* Problem Section — "Sound familiar?" */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Sound familiar?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              You&apos;ve tried the apps. Here&apos;s what keeps going wrong.
            </p>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">You use 3 apps and none of them talk</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  One app for running, another for cycling, a third for strength. Three plans, zero coordination. Your body doesn&apos;t train in silos — but your apps do.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">The plan breaks when life happens</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  You get sick. Miss a week. Come back and the plan picks up where you &quot;should&quot; be — ignoring you just spent 5 days on the couch. That&apos;s not adaptive. That&apos;s a spreadsheet.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">&quot;AI&quot; that only adjusts after a PB</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Your watch knows you slept 4 hours. Your training app doesn&apos;t care. It prescribes the same intervals anyway and calls it &quot;AI-powered.&quot;
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Data everywhere, direction nowhere</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Recovery scores, strain charts, TSS curves, CTL ratios. 47 metrics and still no answer to the only question that matters: &quot;What do I do today?&quot;
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Too intense → burnout in 6 months</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Three hard sessions a week, every week. You start dreading runs. The app doesn&apos;t enforce easy days — so you never actually recover.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Built for pros, not parents</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  15-hour training weeks. Minimum 5 sessions required. Built for people without jobs, kids, or a 6am school run.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              How Coach Al works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Three steps. One plan. Every sport covered.
            </p>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Add your events
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A trek in March, a race in May, a tri in July. Coach Al builds one phased plan that prepares you for each deadline — no overlapping chaos, no manual replanning.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Connect your Garmin
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sleep, HRV, training load, Body Battery — Coach Al reads your recovery state every day. Bad night? Today&apos;s session adapts before you lace up.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Wake up. Train. Done.
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check your phone. See today&apos;s session. No charts to interpret, no zones to calculate, no second-guessing. Just do the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              What makes Coach Al different
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Not another tracker. Not another dashboard. An actual coach.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🎯 Event-driven, not sport-locked
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You don&apos;t train &quot;for cycling.&quot; You train for Bike The Rock on May 16. Coach Al works backward from your event dates and phases your training automatically — then transitions to the next goal.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🔄 Recovery drives the plan, not the calendar
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Most apps schedule deload every 4th week — even if you&apos;re fine, or wrecked on week 2. Coach Al reads HRV, sleep, and cumulative load, then decides. Feedback loops beat calendars.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  💪 Strength is built in, not bolted on
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Hiking prep needs lower body and core work. Coach Al schedules strength sessions around your endurance training — not as a separate app you have to manage yourself.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  ⏱️ Under 10 hours a week
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You have a job, kids, and a life. Coach Al builds plans that fit your actual time — not a pro athlete&apos;s schedule. If the plan can&apos;t survive real life, it&apos;s a bad plan.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🧠 AI that observes, decides, and acts
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Not an AI that writes motivational paragraphs about your run. Not pace adjustments after a PB. Coach Al reads your data and changes your plan. Every day.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  💰 One coach replaces three
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A human running coach: €200/mo. A cycling coach: €150/mo. A strength coach: €100/mo. Coach Al handles all your sports for a fraction of one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Story — Social Proof / Real Test */}
        <section className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                The proof is in the prep
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
                Coach Al is being built and tested in public — by the founder training for 5 events across 5 sports in 5 months. Real sessions, real data, real adaptation.
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
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">4-day mountain trek through the Serra de Tramuntana</p>
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
                  5 events. 5 sports. Under 10 hours per week. One AI coach.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Every session, every adaptation, every result — shared publicly. Follow the build.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a
                    href="https://x.com/eduard_gruen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition text-sm"
                  >
                    Follow on X
                  </a>
                  <a
                    href="https://www.instagram.com/eduardgruen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section — vs Alternatives */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              You&apos;ve tried the alternatives
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Here&apos;s how Coach Al fills the gaps they leave.
            </p>
            <div className="max-w-3xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900 dark:text-white"></th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-500 dark:text-gray-400">Single-sport apps</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-500 dark:text-gray-400">Recovery wearables</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-500 dark:text-gray-400">Analytics platforms</th>
                    <th className="text-center py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">Coach Al</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400">
                  <tr className="border-b border-gray-100 dark:border-gray-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Multi-sport plan</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Daily adaptation</td>
                    <td className="text-center py-3 px-4">⚠️</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Tells you what to do</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Reads recovery data</td>
                    <td className="text-center py-3 px-4">⚠️</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Event-driven phasing</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Strength integrated</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Built for athletes like you
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🥾</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  The adventurer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Training for a trek, a bike-packing trip, or a trail race. Not chasing podiums — just want to finish strong without guessing the prep.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  The age-grouper
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Competitive at local races across multiple sports. Has a job and kids. Can&apos;t train like a pro — needs every hour to count.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  The cross-trainer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Skis in winter, bikes in summer, runs in fall. Tired of losing fitness every time the season changes. Wants one system that manages it all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              FAQ
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How is this different from Garmin Coach or Runna?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Those are single-sport tools. Coach Al plans across all your sports in one coherent system. It also adapts daily based on recovery data — not just after you hit a PB.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Is this a replacement for a human coach?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A human coach costs €200+/mo and typically handles one sport. Coach Al gives you multi-sport planning and daily adaptation for a fraction of that. It can also complement a human coach.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Is this just another static training plan?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No. Miss a week sick? Coach Al recalculates from where you actually are, not where the calendar says you should be. Static plans break. This one adapts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Which sports are supported?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Running, cycling, hiking, swimming, and strength. Built for endurance and mountain athletes who train across multiple disciplines.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What data do I need?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A Garmin watch. Coach Al reads sleep, HRV, training load, and Body Battery — data you&apos;re already collecting. No extra wearable required.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  When does access open?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Early access starts spring 2026. Join the waitlist — first in line gets first access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-blue-600 dark:bg-blue-700 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop juggling apps. Start training.
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              One coach. Every sport. Adapts daily. Join the waitlist.
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
