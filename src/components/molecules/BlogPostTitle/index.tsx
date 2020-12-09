import { FC } from 'react';
import { format } from 'date-fns';
import _Image from 'next/image';
import styled from '@emotion/styled';
import H1 from 'components/atoms/H1';

import styles from './BlogPostTitle.module.scss';

type Props = {
  title: string;
  publishedAt: Date;
};

const BlogPostTitle: FC<Props> = ({ title, publishedAt }) => {
  return (
    <div className={styles.root}>
      <H1 id={title}>{title}</H1>
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row mt-2 mb-4 w-full">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src="/static/images/avatar.jpeg" width={24} height={24} />
          </div>
          <p className="text-sm">
            {'Yuji Matsumoto / '}
            {format(publishedAt, 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>
    </div>
  );
};

const Image = styled(_Image)`
  border-radius: 9999px;
`;

export default BlogPostTitle;
