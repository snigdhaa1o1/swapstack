import { useState } from "react";
import axios from "axios";

function Search() {

  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    try {

      const value = e.target.value;

      setQuery(value);

      const response = await axios.get(
        `http://localhost:5000/api/users/search?username=${value}`
      );

      setUsers(response.data.users);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold tracking-tight">
            Search Users
          </h1>

          <p className="text-zinc-500 mt-3">
            Find friends and connect through skills.
          </p>

        </div>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by username..."
          className="w-full border border-zinc-300 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
        />

        {/* Results */}
        <div className="mt-8 space-y-4">

          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white border border-zinc-200 rounded-2xl p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-semibold">
                    {user.fullName}
                  </h2>

                  <p className="text-zinc-500 text-sm">
                    @{user.username}
                  </p>

                  <p className="text-sm mt-2 text-zinc-600">
                    {user.bio}
                  </p>

                </div>

                <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                  Connect
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Search;