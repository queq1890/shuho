import { FC } from 'react';

const Quote: FC = ({ children }) => {
  return (
    <div className="flex items-center overflow-hidden bg-primary-50 mt-4 border-solid border-l-4 border-primary-500 w-full pt-3 pl-4 pb-3 pr-3">
      <p className="-mt-4">{children}</p>
    </div>
  );
};

export default Quote;
