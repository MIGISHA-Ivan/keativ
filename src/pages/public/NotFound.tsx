import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Share2, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Share2 className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="font-heading text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/" className="block">
            <Button className="w-full bg-red-500 hover:bg-red-600">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Need help? Here are some helpful links:
          </p>
          <div className="space-y-2">
            <Link to="/features" className="block text-sm text-red-500 hover:text-red-600">
              Features
            </Link>
            <Link to="/pricing" className="block text-sm text-red-500 hover:text-red-600">
              Pricing
            </Link>
            <Link to="/contact" className="block text-sm text-red-500 hover:text-red-600">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;