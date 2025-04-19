
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-muted-foreground">
            © {currentYear} Alex Developer. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            Made with <Heart size={14} className="fill-accent text-accent" /> using React & Tailwind
          </div>
          
          <div className="text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
