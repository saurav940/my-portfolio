import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaJira, FaDatabase, FaCode, FaCogs, FaBug, FaFlask, FaReact, FaNodeJs, FaPython, FaBrain } from "react-icons/fa";
import { SiSelenium, SiPostman, SiApachejmeter, SiAppium, SiJenkins, SiOpenai } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Full-Stack & AI",
            icon: <FaBrain className="text-teal-400" />,
            skills: [
                { name: "React.js & Redux", level: 85, icon: <FaReact />, color: "#2dd4bf" },
                { name: "Node.js & Express", level: 80, icon: <FaNodeJs />, color: "#0ea5e9" },
                { name: "Python & FastAPI", level: 75, icon: <FaPython />, color: "#a855f7" },
                { name: "GenAI & OpenAI API", level: 85, icon: <SiOpenai />, color: "#10b981" },
            ]
        },
        {
            title: "Core QA Competencies",
            icon: <FaBug className="text-rose-400" />,
            skills: [
                { name: "Manual Testing", level: 95, color: "#f43f5e" },
                { name: "Automation Testing", level: 90, color: "#fb7185" },
                { name: "API & Integration Testing", level: 90, color: "#fda4af" },
                { name: "Mobile App Testing", level: 85, color: "#fecdd3" },
                { name: "Vendor Management", level: 80, color: "#fca5a5" },
            ]
        },
        {
            title: "Tools & Frameworks",
            icon: <FaCogs className="text-blue-400" />,
            skills: [
                { name: "Selenium", level: 90, icon: <SiSelenium />, color: "#60a5fa" },
                { name: "Appium", level: 80, icon: <SiAppium />, color: "#a78bfa" },
                { name: "JIRA", level: 95, icon: <FaJira />, color: "#2563eb" },
                { name: "Postman", level: 90, icon: <SiPostman />, color: "#fb923c" },
                { name: "JMeter", level: 70, icon: <SiApachejmeter />, color: "#f472b6" },
                { name: "Jenkins & CI/CD", level: 75, icon: <SiJenkins />, color: "#fca5a5" },
            ]
        },
        {
            title: "Languages & Database",
            icon: <FaCode className="text-emerald-400" />,
            skills: [
                { name: "Java", level: 85, icon: <FaJava />, color: "#f87171" },
                { name: "SQL & Databases", level: 75, icon: <FaDatabase />, color: "#facc15" },
                { name: "TestNG & JUnit", level: 85, icon: <FaFlask />, color: "#34d399" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-dark-900 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A versatile skillset bridging high-performance Full-Stack and AI Engineering with comprehensive Banking Automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/5 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && <span className="text-slate-400 text-lg">{skill.icon}</span>}
                                                <span className="text-slate-200 font-medium text-sm sm:text-base">{skill.name}</span>
                                            </div>
                                            <span className="text-slate-500 text-xs sm:text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-dark-700/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                                className="h-full rounded-full relative"
                                                style={{ backgroundColor: skill.color }}
                                              >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

