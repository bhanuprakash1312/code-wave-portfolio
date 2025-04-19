
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, 
  Layers, 
  Palette, 
  GitBranch, 
  Database, 
  Cpu, 
  Scale,
  Sparkles
} from "lucide-react";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "design" | "tools" | "learning";
  icon: JSX.Element;
  color: string;
  description: string;
};

const skills: Skill[] = [
  {
    name: "React",
    level: 85,
    category: "frontend",
    icon: <Code2 size={24} />,
    color: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20",
    description: "Building interactive UIs with reusable components"
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: <Code2 size={24} />,
    color: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20",
    description: "ES6+, async/await, functional programming"
  },
  {
    name: "HTML & CSS",
    level: 95,
    category: "frontend",
    icon: <Code2 size={24} />,
    color: "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20",
    description: "Semantic markup, responsive layouts, animations"
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <Palette size={24} />,
    color: "bg-[#38B2AC]/10 text-[#38B2AC] border-[#38B2AC]/20",
    description: "Utility-first CSS for rapid UI development"
  },
  {
    name: "UI Design",
    level: 75,
    category: "design",
    icon: <Layers size={24} />,
    color: "bg-[#FF61F6]/10 text-[#FF61F6] border-[#FF61F6]/20",
    description: "Creating intuitive user interfaces and experiences"
  },
  {
    name: "Git",
    level: 80,
    category: "tools",
    icon: <GitBranch size={24} />,
    color: "bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20",
    description: "Version control, branching, collaboration"
  },
  {
    name: "RESTful APIs",
    level: 80,
    category: "frontend",
    icon: <Database size={24} />,
    color: "bg-[#0096FF]/10 text-[#0096FF] border-[#0096FF]/20",
    description: "Consuming and integrating API endpoints"
  },
  {
    name: "Responsive Design",
    level: 85,
    category: "design",
    icon: <Scale size={24} />,
    color: "bg-[#9C27B0]/10 text-[#9C27B0] border-[#9C27B0]/20",
    description: "Building interfaces that work on all devices"
  },
  {
    name: "TypeScript",
    level: 60,
    category: "learning",
    icon: <Cpu size={24} />,
    color: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20",
    description: "Currently expanding knowledge in typed JavaScript"
  },
  {
    name: "Next.js",
    level: 55,
    category: "learning",
    icon: <Sparkles size={24} />,
    color: "bg-[#000000]/10 text-foreground border-foreground/20",
    description: "Learning server-side rendering and optimizations"
  }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "design", label: "Design" },
    { id: "tools", label: "Tools" },
    { id: "learning", label: "Learning Next" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            My <span className="gradient-heading">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-secondary/40 text-muted-foreground hover:bg-secondary'}`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
              className={`skill-card ${skill.color}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-md ${skill.color}`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-medium">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
              
              <div className="w-full bg-secondary/50 rounded-full h-2.5 mt-2">
                <motion.div 
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Learning Next */}
        {activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 text-center"
          >
            <h3 className="text-xl font-medium mb-3 inline-flex items-center gap-2">
              <Sparkles className="text-purple" size={20} />
              Currently exploring
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-card rounded-full text-sm border border-border">
                Next.js
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm border border-border">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm border border-border">
                GraphQL
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
