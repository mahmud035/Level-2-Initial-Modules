export const metadata = {
  title: 'Home Page',
  description: 'This is Home Page',
};

const HomePage = () => {
  console.log('From Server');

  return (
    <div>
      <h1 className="text-2xl text-teal-500">This is home page</h1>
    </div>
  );
};

export default HomePage;
