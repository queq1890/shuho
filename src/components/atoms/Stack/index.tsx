import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Stack.module.scss';

const cx = classNames.bind(styles);

type Props = {
  spacing: number;
};

const Stack: FC<Props> = ({ spacing, children }) => {
  return <div className={cx('stack', `spacing-${spacing}`)}>{children}</div>;
};

export default Stack;
