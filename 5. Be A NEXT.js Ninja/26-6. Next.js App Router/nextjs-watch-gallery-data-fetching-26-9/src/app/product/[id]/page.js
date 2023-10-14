import ProductDetails from '@/components/UI/ProductDetails';

const ProductDetailPage = async ({ params }) => {
  // NOTE: Dynamic Data Fetching

  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: 'no-store',
  });
  const product = await res.json();

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;
