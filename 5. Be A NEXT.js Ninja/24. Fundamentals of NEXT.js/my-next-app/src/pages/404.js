import Image from 'next/image';
import React from 'react';

const ErrorPage = () => {
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
    </div>
  );
};

export default ErrorPage;
