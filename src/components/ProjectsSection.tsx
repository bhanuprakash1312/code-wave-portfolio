
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Layers } from "lucide-react";
import pro1 from "../asstets/pro1.png";
import pro2 from "../asstets/pro2.png";
import pro3 from "../asstets/pro3.png";
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A Netflix Clone  built with React , Firebase and styled with Tailwind CSS.",
    image: pro1,
    techStack: ["React", "Tailwind CSS", "DND Kit", "LocalStorage"],
    githubUrl: "https://github.com/bhanuprakash1312/react.git",
    liveUrl: "http://moviestream-rho.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A Simple Todo App built with Javascript and styled with CSS Modules and it stores data in local storage.",
    image: pro2,
    techStack: ["JavaScript", "CSS Modules", "LocalStorage"],
    githubUrl: "https://github.com/bhanuprakash1312/todoapp.git",
    liveUrl: "https://bhanuprakash1312.github.io/todoapp/",
  },
  {
    id: 3,
    title: "A Weather App",
    description: "A Weather App built with Javascript and styled with Tailwind CSS.",
    image: pro3,
    techStack: ["html","css","Javascript"],
    githubUrl: "https://github.com/bhanuprakash1312/weather-app.git",
    liveUrl: "https://bhanuprakash1312.github.io/weather-app/",
  },

];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Featured <span className="gradient-heading">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A selection of my recent work and personal projects
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div>
                    <h3 className="text-white font-bold">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={18} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={16} className="text-purple" />
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary/60 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-ghost text-sm inline-flex items-center gap-1"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary text-sm inline-flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
