import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  MessageCircle,
  Image,
  Users,
  Layers,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Calendar',
      href: '/dashboard/calendar',
      icon: Calendar,
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: BarChart3,
    },
    {
      name: 'Messages',
      href: '/dashboard/messages',
      icon: MessageCircle,
    },
    {
      name: 'Media Library',
      href: '/dashboard/media',
      icon: Image,
    },
    {
      name: 'Influencers',
      href: '/dashboard/influencers',
      icon: Users,
    },
    {
      name: 'Social Sets',
      href: '/dashboard/social-sets',
      icon: Layers,
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
    },
  ];

  return (
    <div className="bg-white w-64 min-h-screen fixed left-0 top-16 border-r border-gray-200">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;