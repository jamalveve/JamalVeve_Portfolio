import React, { useState } from "react";
import {
  FaReact, FaHtml5, FaCss3, FaJava, FaJenkins, FaGitAlt,
} from "react-icons/fa";
import {
  BiLogoTailwindCss, BiLogoJavascript, BiLogoNodejs, BiLogoSpringBoot,
} from "react-icons/bi";
import {
  SiPostman, SiJira, SiMysql, SiEclipseche,
} from "react-icons/si";
import { VscCommentUnresolved, VscVscode } from "react-icons/vsc";
import { MdGroups3 } from "react-icons/md";

// Skills array
const SKILLS = [
  // ... Paste your SKILLS array here exactly as is ...
];

const tabs = ["All", "Frontend", "Backend", "Tools", "Skills"];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.type.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredSkills.map(({ id, icon: Icon, skill, progress }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl text-blue-600 mb-2">
              <Icon />
            </div>
            <h4 className="text-lg font-semibold">{skill}</h4>
            {progress && (
              <div className="text-sm text-gray-600 mt-1">{progress}%</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
