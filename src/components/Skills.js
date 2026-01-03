import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaJira, FaDatabase } from "react-icons/fa";
import { SiSelenium, SiPostman, SiApachejmeter, SiAppium } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "Manual Testing", level: 95, color: "#4ade80", icon: <FaJava /> }, // Using generic icon or finding better specific one
        { name: "Java", level: 85, color: "#f87171", icon: <FaJava /> },
        { name: "Selenium", level: 90, color: "#60a5fa", icon: <SiSelenium /> },
        { name: "Appium", level: 80, color: "#c084fc", icon: <SiAppium /> },
        { name: "API Testing (Postman)", level: 90, color: "#fb923c", icon: <SiPostman /> },
        { name: "JIRA", level: 95, color: "#2563eb", icon: <FaJira /> },
        { name: "SQL", level: 75, color: "#facc15", icon: <FaDatabase /> },
        { name: "JMeter", level: 70, color: "#a855f7", icon: <SiApachejmeter /> },
    ];

    return (
        <div className="py-20 bg-dark-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolset developed over 4+ years of rigorous banking software testing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-dark-800/80 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-gray-300">{skill.icon}</span>
                                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                </div>
                                <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-dark-700 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-2.5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
