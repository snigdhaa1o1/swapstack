import { X } from "lucide-react";

function SkillTag({ skill, onRemove }) {
  return (
    <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">

      <span>{skill}</span>

      <button
        onClick={onRemove}
        className="hover:text-zinc-300 transition"
      >
        <X size={14} />
      </button>

    </div>
  );
}

export default SkillTag;