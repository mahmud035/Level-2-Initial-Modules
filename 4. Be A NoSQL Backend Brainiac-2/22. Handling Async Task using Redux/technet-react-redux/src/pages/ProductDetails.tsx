/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product } = useSingleProductQuery(id);

  return (
    <>
      <div className="flex items-center mx-auto border-b border-gray-300 max-w-7xl">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button>Add to cart</Button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
