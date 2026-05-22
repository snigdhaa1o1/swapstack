const matches = [
  {
    name: "Rahul Sharma",
    skillsHave: ["React", "Frontend"],
    skillsWant: ["DSA", "DevOps"],
    compatibility: "92%",
  },
  {
    name: "Priya Verma",
    skillsHave: ["UI/UX", "Figma"],
    skillsWant: ["React", "Backend"],
    compatibility: "87%",
  },
  {
    name: "Aman Gupta",
    skillsHave: ["DevOps", "AWS"],
    skillsWant: ["MERN", "AI"],
    compatibility: "81%",
  },
];

function Matches() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold tracking-tight">
            Your Matches
          </h1>

          <p className="text-zinc-500 mt-3">
            Connect with learners that match your goals and skills.
          </p>

        </div>

        {/* Match Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200 rounded-3xl p-6 hover:shadow-md transition"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-6">

                <div>
                  <h2 className="text-xl font-semibold">
                    {match.name}
                  </h2>

                  <p className="text-sm text-zinc-500 mt-1">
                    AI Compatibility Match
                  </p>
                </div>

                <div className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {match.compatibility}
                </div>

              </div>

              {/* Skills Have */}
              <div className="mb-5">

                <p className="text-sm font-medium mb-3">
                  Skills They Have
                </p>

                <div className="flex flex-wrap gap-2">

                  {match.skillsHave.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-black text-white px-3 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </div>
                  ))}

                </div>

              </div>

              {/* Skills Want */}
              <div>

                <p className="text-sm font-medium mb-3">
                  Wants To Learn
                </p>

                <div className="flex flex-wrap gap-2">

                  {match.skillsWant.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-zinc-100 px-3 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </div>
                  ))}

                </div>

              </div>

              {/* Button */}
              <button className="w-full mt-8 bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
                Connect
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Matches;