import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'AI Roadmap', href: '#roadmap' },
    { name: 'CodeLab', href: '#codelab' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Eduverse</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-sm font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-primary">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button asChild className="btn-primary w-fit mt-4">
                <Link to="/login">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;