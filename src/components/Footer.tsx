import { Link } from 'react-router-dom';
import { Film, Mail, Github } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-8 mt-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <Film className="text-primary h-6 w-6" />
              <span className="text-lg font-bold">CinemaxWorld</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Stream your favorite movies online. The ultimate destination for movie lovers.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/?category=action" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Action
                </Link>
              </li>
              <li>
                <Link to="/?category=comedy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Comedy
                </Link>
              </li>
              <li>
                <Link to="/?category=drama" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Drama
                </Link>
              </li>
              <li>
                <Link to="/?category=thriller" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Thriller
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:contact@cinemaxworld.com" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  contact@cinemaxworld.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-gray-400" />
                <a href="https://github.com/cinemaxworld" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  @cinemaxworld
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} CinemaxWorld. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This site is for educational purposes only and does not host any content.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
