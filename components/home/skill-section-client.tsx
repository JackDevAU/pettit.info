"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  bold: boolean;
};

export default function SkillSectionClient({ allSkills }: { allSkills: Skill[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {allSkills.map((skill, index) => (
        <motion.span
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.02 }}
          className={`
            px-4 py-2 border-2 border-black/10 text-lg sm:text-xl transition-all duration-300
            ${
              skill.bold
                ? "font-black bg-black text-white border-black"
                : "font-medium text-neutral-500 hover:text-black hover:border-black"
            }
          `}
        >
          {skill.name}
        </motion.span>
      ))}
    </div>
  );
}
