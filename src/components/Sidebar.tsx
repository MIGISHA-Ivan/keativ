import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  MessageCircle,
  Image,
  Users,
  Layers,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const activeSocialSet = useSelector((state: RootState) => state.socialSets.activeSocialSet);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

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
  ];

  return (
    <div className={`bg-white ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen fixed left-0 top-16 border-r border-gray-200 transition-all duration-300 z-40`}>
      {/* Toggle Button */}
      <div className="absolute -right-3 top-6 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggle}
          className="w-6 h-6 p-0 rounded-full bg-white border shadow-md"
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Section */}
        <div className="border-b border-gray-200 pb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`w-full ${isCollapsed ? 'p-2' : 'p-3'} justify-start`}>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>
                    {user?.name?.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <>
                    <div className="ml-3 text-left flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.email}
                      </p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  `flex items-center ${isCollapsed ? 'justify-center px-2' : 'space-x-3 px-3'} py-2 rounded-lg text-sm font-medium transition-colors`,
                  isActive
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;