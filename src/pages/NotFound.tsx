import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold mb-4 gradient-heading">404</h1>
          <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
          <a href="/" className="button-primary inline-block">
            Return to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
