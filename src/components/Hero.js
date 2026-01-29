import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const handleDownload = () => {
    // Direct link to file in public folder
    const link = document.createElement('a');
    link.href = '/SAURAV_KUMAR_CV_NEW.pdf';
    link.download = 'SAURAV_KUMAR_CV_NEW.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Calculate years of experience
  const startDate = new Date('2021-05-17');
  const today = new Date();
  const yearsOfExperience = (today - startDate) / (1000 * 60 * 60 * 24 * 365.25);
  const displayYears = yearsOfExperience.toFixed(1);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Abstract Gradient Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Welcome Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:border-primary-500/30 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-sm font-medium text-primary-100 tracking-wide">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white">
            Hi, I'm <br className="md:hidden" />
            <span className="relative inline-block mt-2 md:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-300 to-blue-500 animate-gradient-x">
              Saurav Kumar
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div variants={itemVariants} className="h-20 sm:h-24 md:h-28 text-2xl md:text-4xl font-light text-slate-300 max-w-4xl mx-auto leading-relaxed overflow-hidden">
            <span className="opacity-70 mr-3">I build</span>
            <TypeAnimation
              sequence={[
                'Robust Automation Frameworks',
                2000,
                'Scalable API Testing Solutions',
                2000,
                'Seamless User Experiences',
                2000,
                'High-Quality Software',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary-400 font-semibold"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            With over <span className="text-primary-400 font-bold">{displayYears}+ years</span> of experience in banking software testing,
            I combine meticulous manual precision with advanced automation strategies to ensure flawless, high-performance financial systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl overflow-hidden transition-all shadow-lg hover:shadow-primary-600/40"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-2">
                View Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button
              onClick={handleDownload}
              className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform duration-300" />
              Download CV
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-8 mt-16 text-slate-500">
            <a href="https://github.com/saurav940" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 hover:-translate-y-1 duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/saurav-kumar-9528161a0/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:-translate-y-1 duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:sauravkarda1997@gmail.com" className="hover:text-primary-400 transition-colors transform hover:scale-110 hover:-translate-y-1 duration-300">
              <FaEnvelope size={30} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-slate-500 hover:text-white transition-colors"
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;