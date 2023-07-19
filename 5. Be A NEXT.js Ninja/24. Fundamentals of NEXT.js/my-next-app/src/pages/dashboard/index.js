import DashboardLayout from '@/components/layouts/DashboardLayout';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

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
