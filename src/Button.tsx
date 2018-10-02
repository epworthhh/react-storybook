import * as React from 'react';
import './Button.css';

export interface Props {
  /** button text */
  children: React.ReactNode;
  /** button function */
  onClick: () => void;
  /**
   * disables onclick
   * 
   * @default false
   */
  disabled?: boolean;
  /** background color */
  bg: string;
}

const noop = () => {};
export const Button = (props: Props) => {
  const { children, onClick, disabled = false, bg } = props;
  const disabledclass = disabled ? 'Button_disabled' : '';

  return (
    <div
      className={`Button ${disabledclass}`}
      style={{backgroundColor: bg}}
      onClick={!disabled ? onClick : noop}
    >
      <span>{children}</span>
    </div>
  )
};