import { FC } from 'react';
import Header from 'components/molecules/Header';

const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    <main className="flex flex-col flex-center px-4 md:px-8 pb-8">
      <article className="flex-col justify-center items-start mx-auto mb-16 w-full max-w-screen-md">
        {children}
      </article>
    </main>
  </>
);

export default MainLayout;
