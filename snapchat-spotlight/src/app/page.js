import MainLayout from '../components/layout/MainLayout';
import LoginForm from '../components/ui/LoginForm';
import SpotlightVideo from '../components/ui/SpotlightVideo';
import SnapInfo from '../components/ui/SnapInfo';

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LoginForm />
        <SpotlightVideo />
        <SnapInfo />
      </div>
    </MainLayout>
  );
}
