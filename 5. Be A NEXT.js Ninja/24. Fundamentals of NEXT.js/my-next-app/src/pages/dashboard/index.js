import DashboardLayout from '@/components/layouts/DashboardLayout';
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
