import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Database, Cloud, Smartphone, Brain, BarChart3 } from 'lucide-react';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const TechPage = () => {
  const categoryIcons = {
    frontend: <Code className="w-8 h-8" />,
    backend: <Database className="w-8 h-8" />,
    devops: <Cloud className="w-8 h-8" />,
    marketing: <BarChart3 className="w-8 h-8" />,
    ai: <Brain className="w-8 h-8" />
  };

  const categoryColors = {
    frontend: 'from-cyan-400 to-blue-500',
    backend: 'from-purple-500 to-pink-500',
    devops: 'from-green-400 to-blue-500',
    marketing: 'from-orange-400 to-red-500',
    ai: 'from-indigo-500 to-purple-600'
  };

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
                Technologies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive overview of my technical expertise across full-stack development, 
              AI integration, and modern web technologies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {Object.entries(categoryIcons).map(([category, icon], categoryIndex) => (
            <motion.div
              key={category}
              variants={fadeIn("up", "spring", categoryIndex * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white`}>
                  {icon}
                </div>
                <h2 className="text-3xl font-bold capitalize">
                  {category === "ai" ? "AI & Machine Learning" : 
                   category === "devops" ? "DevOps & Tools" : 
                   `${category} Development`}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {tech.name}
                          </h3>
                          {tech.link && (
                            <a 
                              href={tech.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-cyan-400 hover:text-white transition-colors"
                            >
                              Official Site →
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechPage;