function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">

      <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-8">

        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back
        </h1>

        <p className="text-zinc-500 mt-2">
          Login to continue your learning journey.
        </p>

        <form className="mt-8 space-y-5">

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
              placeholder="Enter your password"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            Login
          </button>

        </form>

        <p className="text-sm text-zinc-500 text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-black font-medium cursor-pointer">
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;