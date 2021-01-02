import { FC } from 'react';
import Image from 'next/image';
import H1 from 'components/atoms/H1';

type Props = {
  title: string;
  publishedAt: Date;
};

const BlogPostTitle: FC<Props> = ({ title, publishedAt }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full max-w-screen-md">
      <H1 id={title}>{title}</H1>
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row mt-2 mb-4 w-full">
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              className="rounded-full"
              src="/static/images/avatar.jpeg"
              width={24}
              height={24}
              alt="avatar"
            />
          </div>
          <p className="text-sm">
            {'Yuji Matsumoto / '}
            {publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTitle;
