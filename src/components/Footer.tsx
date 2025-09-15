import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Platform: [
      { name: 'Career Guidance', path: '/career-guidance' },
      { name: 'Roadmap Generator', path: '/roadmap-generator' },
      { name: 'Interview Prep', path: '/interview-prep' },
      { name: 'Insights', path: '/insights' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
    Resources: [
      { name: 'Blog', path: '/insights' },
      { name: 'Help Center', path: '/faq' },
      { name: 'Community', path: '/community' },
      { name: 'Support', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-primary text-primary-foreground p-2 rounded-lg"
              >
                <Compass className="h-6 w-6" />
              </motion.div>
              <span className="text-xl font-semibold text-foreground">CareerCompass</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering professionals to navigate their career journey with expert guidance, 
              personalized roadmaps, and comprehensive interview preparation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CareerCompass. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Mail className="h-4 w-4" />
              <span>support@careercompass.com</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}