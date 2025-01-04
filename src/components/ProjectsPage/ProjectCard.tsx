import React from "react";

interface ProjectCardProps {
  name: string;
  status: "On Track" | "Off Track";
  description: string;
  dueDate: string;
  issues: number;
  teamMembers: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  status,
  description,
  dueDate,
  issues,
  teamMembers,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between mb-4">
        <span
          className={`text-sm ${
            status === "On Track" ? "text-green-500" : "text-red-500"
          }`}>
          {status}
        </span>
        <span className="text-sm">Due: {dueDate}</span>
      </div>
      <div className="flex items-center mb-4">
        {teamMembers.map((member, index) => (
          <img
            key={index}
            src={`https://avatars.dicebear.com/api/initials/${member}.svg`}
            alt={member}
            className="w-6 h-6 rounded-full mr-2"
          />
        ))}
        <span className="text-sm">{teamMembers.length} members</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-red-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.856-1.102 2.856-2.57a2.574 2.574 0 00-2.856-2.57H5.072a2.574 2.574 0 00-2.856 2.57A2.574 2.574 0 005.072 15.43a2.574 2.574 0 002.856 2.57h13.856"
          />
        </svg>
        <span className="text-sm">{issues} issues</span>
      </div>
    </div>
  );
};

export default ProjectCard;
