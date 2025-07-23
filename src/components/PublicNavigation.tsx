import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

const PublicNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Share2 className="h-8 w-8 text-red-500" />
              <span className="font-heading text-xl font-bold text-gray-900">
                Zenith
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-red-500">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavigation;