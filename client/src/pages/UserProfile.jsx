import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserProfile() {

  const { username } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
      try {

        const response = await axios.get(
          `http://localhost:5000/api/users/${username}`
        );

        setUser(response.data.user);

      } catch (error) {

        console.log(error);

      }
    };

    fetchUser();

  }, [username]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 p-8">

      <div className="max-w-4xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h1 className="text-4xl font-bold tracking-tight">
                {user.fullName}
              </h1>

              <p className="text-zinc-500 mt-2 text-lg">
                @{user.username}
              </p>

            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Connect
            </button>

          </div>

          {/* Bio */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-4">
              About
            </h2>

            <p className="text-zinc-600 leading-relaxed">
              {user.bio}
            </p>

          </div>

          {/* Skills Have */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-4">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {user.skillsHave.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

          {/* Skills Want */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              Wants To Learn
            </h2>

            <div className="flex flex-wrap gap-3">

              {user.skillsWant.map((skill, index) => (
                <div
                  key={index}
                  className="bg-zinc-100 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserProfile;