function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-sm font-medium text-zinc-500 mb-4">
            Peer-to-Peer Skill Exchange Platform
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Trade skills.
            <br />
            Build your stack.
          </h1>

          <p className="mt-6 text-lg text-zinc-600 max-w-xl leading-relaxed">
            Connect with developers, designers, and learners to exchange
            skills, collaborate in real-time, and grow together through
            meaningful learning sessions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Start Learning
            </button>

            <button className="border border-zinc-300 px-6 py-3 rounded-full font-medium hover:bg-zinc-100 transition">
              Explore Skills
            </button>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">

            <div>
              <h2 className="text-2xl font-bold">5K+</h2>
              <p className="text-zinc-500 text-sm mt-1">
                Active Learners
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">1K+</h2>
              <p className="text-zinc-500 text-sm mt-1">
                Skill Matches
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">20+</h2>
              <p className="text-zinc-500 text-sm mt-1">
                Tech Categories
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <div className="bg-zinc-100 border border-zinc-200 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h3 className="font-semibold text-lg">
                  Your Matches
                </h3>

                <p className="text-sm text-zinc-500">
                  AI-powered recommendations
                </p>
              </div>

              <div className="bg-black text-white text-xs px-3 py-1 rounded-full">
                LIVE
              </div>

            </div>

            {/* Match Cards */}
            <div className="space-y-4">

              <div className="bg-white rounded-2xl p-4 border border-zinc-200">
                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="font-medium">
                      Rahul Sharma
                    </h4>

                    <p className="text-sm text-zinc-500 mt-1">
                      React ↔ DSA
                    </p>
                  </div>

                  <p className="text-green-600 font-semibold text-sm">
                    92% Match
                  </p>

                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-zinc-200">
                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="font-medium">
                      Priya Verma
                    </h4>

                    <p className="text-sm text-zinc-500 mt-1">
                      UI/UX ↔ Frontend
                    </p>
                  </div>

                  <p className="text-green-600 font-semibold text-sm">
                    87% Match
                  </p>

                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-zinc-200">
                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="font-medium">
                      Aman Gupta
                    </h4>

                    <p className="text-sm text-zinc-500 mt-1">
                      DevOps ↔ MERN
                    </p>
                  </div>

                  <p className="text-green-600 font-semibold text-sm">
                    81% Match
                  </p>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;