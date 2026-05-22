import { Users, MessageSquare, Sparkles } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Users size={28} />,
      title: "Smart Skill Matching",
      description:
        "Find people whose skills perfectly complement yours and grow together.",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Real-Time Collaboration",
      description:
        "Chat, connect, and exchange knowledge through interactive learning sessions.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "AI Learning Assistant",
      description:
        "Receive AI-generated notes, summaries, and personalized learning roadmaps.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-sm font-medium text-zinc-500 mb-3">
            FEATURES
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Everything you need to grow
          </h2>

          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            SwapStack helps learners connect, collaborate, and level up
            through meaningful peer-to-peer learning.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-md transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;