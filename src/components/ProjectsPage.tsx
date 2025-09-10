import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-primary/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={textVariant()}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of innovative solutions I've built, from AI-powered applications 
              to full-stack web platforms that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.source_code_link && (
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-cyan-400/20 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live_demo_link && (
                      <a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-cyan-400/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    {project.client_url && (
                      <a
                        href={project.client_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-white transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm rounded-full border ${tag.color} bg-white/5 border-white/20`}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.live_demo_link && (
                      <a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.source_code_link && (
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border border-white/20 text-white rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-center"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Let's collaborate and bring your ideas to life with cutting-edge technology.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;