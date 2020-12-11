import { FC } from 'react';

type Props = {
  id: string;
};

const H1: FC<Props> = ({ id, children }) => {
  return (
    <h1 className="my-4 max-w-full text-5xl font-bold" id={id}>
      {children}
    </h1>
  );
};

export default H1;
