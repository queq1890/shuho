import { FC } from 'react';

// FIX ME: remove this CSS
import './Quote.module.scss';

const Quote: FC = ({ children }) => {
  return (
    <div className="quote-container flex items-center overflow-hidden bg-primary-50 mt-4 border-solid border-l-4 border-primary-500 w-full pt-3 pl-4 pb-3 pr-3">
      {children}
    </div>
  );
};

export default Quote;
