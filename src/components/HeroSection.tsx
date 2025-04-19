
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Background animation component
const BackgroundShapes = () => {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-10 bg-gradient-to-r from-purple to-accent"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-10 relative overflow-hidden bg-grid">
      <BackgroundShapes />
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="mb-4">
              <span className="block text-2xl md:text-3xl font-normal mb-2">Hi, I'm <span className="font-semibold">Alex</span> 👋</span>
              <span className="gradient-heading font-bold">Frontend Developer</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-normal">
              React Enthusiast | UI Lover | Problem Solver
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
          >
            I craft beautiful, responsive interfaces with modern frontend technologies, turning ideas into seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-ghost">
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-light">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300"
        >
          <ChevronDown className="text-muted-foreground" size={20} />
        </a>
      </div>
    </section>
  );
};
