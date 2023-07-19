import { Button } from 'antd';
import Link from 'next/link';

const ArticlePage = () => {
  return (
    <div>
      <h1>Article Page</h1>
      <Button type="primary">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default ArticlePage;
