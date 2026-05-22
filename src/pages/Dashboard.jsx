function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 flex">

      {/* Sidebar */}
        <nav className="mt-10 space-y-4">

  <a
    href="/dashboard"
    className="block w-full text-left px-4 py-3 rounded-xl bg-black text-white font-medium"
  >
    Dashboard
  </a>

  <a
    href="/matches"
    className="block w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-100 transition"
  >
    Matches
  </a>

  <a
    href="/profile"
    className="block w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-100 transition"
  >
    Profile
  </a>

</nav>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Topbar */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back 👋
            </h1>

            <p className="text-zinc-500 mt-2">
              Continue learning and connecting with your matches.
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            S
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl border border-zinc-200 p-6">
            <p className="text-zinc-500 text-sm">
              Total Matches
            </p>

            <h2 className="text-4xl font-bold mt-4">
              24
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 p-6">
            <p className="text-zinc-500 text-sm">
              Sessions Completed
            </p>

            <h2 className="text-4xl font-bold mt-4">
              12
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 p-6">
            <p className="text-zinc-500 text-sm">
              Learning Streak
            </p>

            <h2 className="text-4xl font-bold mt-4">
              7 Days
            </h2>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;