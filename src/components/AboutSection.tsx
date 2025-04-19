
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Cpu, Coffee, Music, Sparkles } from "lucide-react";

export const AboutSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl font-bold mb-6"
            >
              About <span className="gradient-heading">Me</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground mb-4 text-lg"
            >
              I'm a passionate frontend developer with a keen eye for design and a love for creating responsive, intuitive user interfaces.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground mb-6 text-lg"
            >
              I build beautiful, responsive web experiences with React & modern CSS. My focus is on creating engaging user interfaces that are both functional and delightful to use.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="bg-card rounded-lg p-5 border border-border card-glow"
            >
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Sparkles className="text-purple" size={18} />
                <span>When I'm not coding, I love:</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <Coffee className="text-accent" size={18} />
                  <span>Exploring new coffee shops</span>
                </li>
                <li className="flex items-center gap-3">
                  <Music className="text-accent" size={18} />
                  <span>Playing guitar and discovering new music</span>
                </li>
                <li className="flex items-center gap-3">
                  <Cpu className="text-accent" size={18} />
                  <span>Tinkering with new tech gadgets</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Visual Content */}
          <motion.div 
            variants={itemVariants}
            className="order-1 md:order-2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple to-accent opacity-20 rounded-2xl -z-10 blur-3xl" />
              <div className="rounded-2xl overflow-hidden border border-border p-4 bg-card h-full flex items-center justify-center card-glow">
                <Code size={80} className="text-primary opacity-90" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-30 blur-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple rounded-full opacity-20 blur-2xl" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-10 w-20 h-20 rounded-full border border-purple/30 opacity-70" />
            <div className="absolute bottom-1/4 -right-5 w-10 h-10 rounded-full border border-accent/30 opacity-70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
