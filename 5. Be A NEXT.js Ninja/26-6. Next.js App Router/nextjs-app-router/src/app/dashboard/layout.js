import Sidebar from '@/components/shared/Sidebar';

export const metadata = {
  title: 'Dashboard Page',
  description: 'This is Dashboard Page',
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
