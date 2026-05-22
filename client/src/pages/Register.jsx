function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">

      <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-8">

        <h1 className="text-3xl font-bold tracking-tight">
          Create account
        </h1>

        <p className="text-zinc-500 mt-2">
          Join SwapStack and start exchanging skills.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;