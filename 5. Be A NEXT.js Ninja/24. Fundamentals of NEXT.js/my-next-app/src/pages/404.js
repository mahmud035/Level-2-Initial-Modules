import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();

  // NOTE: Dynamically navigate to home page (Interesting)
  setTimeout(() => {
    router.push('/');
  }, 5000);

  return (
    <div>
      <Image
        src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"
        alt="Picture of 404"
        width={1300}
        height={600}
        style={{
          objectFit: 'cover',
        }}
      ></Image>

      <Button type="primary">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
