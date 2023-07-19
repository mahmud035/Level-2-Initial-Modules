import RootLayout from '@/components/layouts/RootLayout';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
