import { FC } from 'react';

type Props = {
  spacing: number;
  direction?: 'col' | 'row';
  className?: string;
};

const Stack: FC<Props> = ({
  spacing,
  direction = 'col',
  className,
  children,
}) => {
  const spaceClassName =
    direction === 'col' ? `space-y-${spacing}` : `space-x-${spacing}`;

  return (
    <div className={`flex flex-${direction} ${spaceClassName} ${className}`}>
      {children}
    </div>
  );
};

export default Stack;
