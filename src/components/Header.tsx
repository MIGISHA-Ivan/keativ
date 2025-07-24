import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Share2, 
  Bell, 
  ChevronDown
} from 'lucide-react';
import { RootState } from '../redux/store';

const Header = () => {
  const activeSocialSet = useSelector((state: RootState) => state.socialSets.activeSocialSet);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 z-50">
      <div className="px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Share2 className="h-6 w-6 text-red-500" />
            <span className="font-heading text-lg font-bold text-gray-900">
              Keativ
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-sm text-gray-500">Active Set:</span>
            <Badge variant="outline" className="px-3 py-1">
              {activeSocialSet?.name || 'No Set Selected'}
            </Badge>
          </div>
          
          <div className="text-sm text-gray-500">
            {activeSocialSet?.platforms.filter(p => p.isConnected).length || 0} platforms connected
          </div>
          
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;