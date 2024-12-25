import React from 'react';
import cx from 'classnames';
import style from './MyButton.module.scss';

export type MyButtonProps = {
  onClick?: () => void,
  /**
   * 就是 rounded
   */
  rounded: boolean,
  /**
   * 就是 color
   */
  color?: string,
  children: React.children,
  /**
   * 可以傳 className
   */
  className?: string,
  variant: 'primary' | 'secondary',
};
const MyButton: React.FC<MyButtonProps> = (props) => {
  const {
    onClick,
    children,
    rounded,
    className,
    color = 'black',
    variant = 'primary',
  } = props;
  const attrStyle = {
    color,
  };
  return (
    <button
      style={attrStyle}
      data-variant={variant}
      className={cx(style.root, className)}
      type="button"
      data-rounded={rounded}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
