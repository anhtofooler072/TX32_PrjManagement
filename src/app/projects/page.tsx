"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

const projects = [
  {
    name: "Adoddle",
    status: "Off Track" as "Off Track" | "On Track",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: "05 April 2023",
    issues: 14,
    teamMembers: ["John Doe", "Jane Smith", "David Lee"],
  },
  {
    name: "BuildIt",
    status: "On Track" as "Off Track" | "On Track",
    description:
    "A project management tool for construction companies to manage their projects efficiently.",
    dueDate: "12 June 2023",
    issues: 5,
    teamMembers: ["Alice Johnson", "Bob Brown", "Charlie Davis"],
  },
  {
    name: "HealthPlus",
    status: "Off Track" as "Off Track" | "On Track",
    description:
    "A healthcare management system to streamline patient records and appointments.",
    dueDate: "20 July 2023",
    issues: 20,
    teamMembers: ["Eve White", "Frank Green", "Grace Black"],
  },
  {
    name: "EduLearn",
    status: "On Track" as "Off Track" | "On Track",
    description:
      "An e-learning platform for students to access courses and educational resources.",
    dueDate: "15 August 2023",
    issues: 8,
    teamMembers: ["Hannah Blue", "Ian Red", "Jack Yellow"],
  },
  {
    name: "ShopEase",
    status: "On Track" as "Off Track" | "On Track",
    description:
      "An e-commerce platform to provide a seamless shopping experience for users.",
    dueDate: "30 September 2023",
    issues: 3,
    teamMembers: ["Karen Purple", "Leo Orange", "Mia Pink"],
  },
  {
    name: "TravelBuddy",
    status: "Off Track" as "Off Track" | "On Track",
    description:
      "A travel planning app to help users plan and book their trips effortlessly.",
    dueDate: "10 October 2023",
    issues: 12,
    teamMembers: ["Nina Gray", "Oscar Silver", "Paul Gold"],
  },
  {
    name: "GreenEnergy",
    status: "On Track" as "Off Track" | "On Track",
    description:
      "A renewable energy project focused on developing sustainable energy solutions.",
    dueDate: "22 November 2023",
    issues: 7,
    teamMembers: ["Olivia Brown", "Liam White", "Sophia Black"],
  },
  {
    name: "Foodie",
    status: "Off Track" as "Off Track" | "On Track",
    description:
      "A food delivery app that connects users with local restaurants and food vendors.",
    dueDate: "05 December 2023",
    issues: 15,
    teamMembers: ["Emma Green", "Noah Blue", "Ava Red"],
  },
  {
    name: "FitLife",
    status: "On Track" as "Off Track" | "On Track",
    description:
      "A fitness app that provides workout plans and tracks user progress.",
    dueDate: "18 January 2024",
    issues: 4,
    teamMembers: ["Isabella Yellow", "Mason Orange", "Lucas Purple"],
  },
  {
    name: "HomeSecure",
    status: "Off Track" as "Off Track" | "On Track",
    description:
      "A home security system that offers real-time monitoring and alerts.",
    dueDate: "28 February 2024",
    issues: 10,
    teamMembers: ["Mia Pink", "Ethan Gray", "Amelia Silver"],
  },
  {
    name: "EventPlanner",
    status: "On Track" as "Off Track" | "On Track",
    description:
      "An event planning app that helps users organize and manage events.",
    dueDate: "15 March 2024",
    issues: 6,
    teamMembers: ["Charlotte Gold", "James Bronze", "Harper Copper"],
  },
];

import CreateProjectModal from "@/components/ProjectsPage/CreateProjectModal";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleCreateButtonClick = () => {
    setShowModal(true);
  };
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="p-5 flex flex-col justify-between h-full bg-white w-full overflow-y-scroll">
      <div className="flex flex-row justify-between items-center mb-6">
        <h1 className="text-2xl text-gray-700 font-bold  ml-2">Projects</h1>
        <button
          onClick={handleCreateButtonClick}
          className="ml-auto bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Create Project
        </button>
      </div>
      <CreateProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {currentProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              // exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1 }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 rounded-md py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
