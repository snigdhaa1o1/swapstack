import { useState } from "react";
import SkillTag from "../components/shared/SkillTag";

function Profile() {

  const [skillsHave, setSkillsHave] = useState([
    "React",
    "UI/UX",
  ]);

  const [skillsWant, setSkillsWant] = useState([
    "AI",
    "DevOps",
  ]);

  const [haveInput, setHaveInput] = useState("");
  const [wantInput, setWantInput] = useState("");

  // Add Skill Have
  const handleAddHaveSkill = (e) => {
    if (e.key === "Enter" && haveInput.trim() !== "") {
      e.preventDefault();

      setSkillsHave([...skillsHave, haveInput]);
      setHaveInput("");
    }
  };

  // Add Skill Want
  const handleAddWantSkill = (e) => {
    if (e.key === "Enter" && wantInput.trim() !== "") {
      e.preventDefault();

      setSkillsWant([...skillsWant, wantInput]);
      setWantInput("");
    }
  };

  // Remove Skill Have
  const removeHaveSkill = (skillToRemove) => {
    setSkillsHave(
      skillsHave.filter((skill) => skill !== skillToRemove)
    );
  };

  // Remove Skill Want
  const removeWantSkill = (skillToRemove) => {
    setSkillsWant(
      skillsWant.filter((skill) => skill !== skillToRemove)
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold tracking-tight">
            Complete Your Profile
          </h1>

          <p className="text-zinc-500 mt-3">
            Tell SwapStack about your skills and learning goals.
          </p>

        </div>

        {/* Form Card */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 space-y-6">

          {/* Full Name */}
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

          {/* Bio */}
          <div>

            <label className="text-sm font-medium">
              Bio
            </label>

            <textarea
              rows="4"
              placeholder="Tell others about yourself..."
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition resize-none"
            />

          </div>

          {/* Skills You Have */}
          <div>

            <label className="text-sm font-medium">
              Skills You Have
            </label>

            <input
              type="text"
              value={haveInput}
              onChange={(e) => setHaveInput(e.target.value)}
              onKeyDown={handleAddHaveSkill}
              placeholder="Press Enter to add skill"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />

            <div className="flex flex-wrap gap-3 mt-4">

              {skillsHave.map((skill, index) => (
                <SkillTag
                  key={index}
                  skill={skill}
                  onRemove={() => removeHaveSkill(skill)}
                />
              ))}

            </div>

          </div>

          {/* Skills You Want */}
          <div>

            <label className="text-sm font-medium">
              Skills You Want to Learn
            </label>

            <input
              type="text"
              value={wantInput}
              onChange={(e) => setWantInput(e.target.value)}
              onKeyDown={handleAddWantSkill}
              placeholder="Press Enter to add skill"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />

            <div className="flex flex-wrap gap-3 mt-4">

              {skillsWant.map((skill, index) => (
                <SkillTag
                  key={index}
                  skill={skill}
                  onRemove={() => removeWantSkill(skill)}
                />
              ))}

            </div>

          </div>

          {/* Availability */}
          <div>

            <label className="text-sm font-medium">
              Availability
            </label>

            <select className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-black transition">

              <option>1-2 Hours / Week</option>
              <option>3-5 Hours / Week</option>
              <option>5+ Hours / Week</option>

            </select>

          </div>

          {/* Save Button */}
          <button className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;