import { Outlet } from 'react-router-dom';
import PublicNavigation from '../components/PublicNavigation';
import Footer from '../components/Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;