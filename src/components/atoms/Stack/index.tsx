import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Stack.module.scss';

const cx = classNames.bind(styles);

type Props = {
  spacing: number;
  direction?: 'column' | 'row';
  className?: string;
};

const Stack: FC<Props> = ({
  spacing,
  direction = 'column',
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        'stack',
        `direction-${direction}`,
        `spacing-${spacing}-${direction}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
