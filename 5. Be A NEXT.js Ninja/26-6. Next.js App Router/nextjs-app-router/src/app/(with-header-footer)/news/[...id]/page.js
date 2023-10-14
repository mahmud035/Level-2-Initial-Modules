const DynamicNews = ({ params, searchParams }) => {
  console.log('params:', params);
  console.log('searchParams:', searchParams);

  return (
    <div>
      <h1 className="text-2xl text-teal-500">Dynamic Segments: {params.id}</h1>
      <h1 className="text-2xl text-teal-500">
        Search Params or Query String: {searchParams.name} {searchParams.code}
      </h1>
    </div>
  );
};

export default DynamicNews;
