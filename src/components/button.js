
import React from 'react';
import '../scss/_buttons.scss';

const Button = ({ children, size, color, variant, disabled }) => {
  const btnSize = size === 'large' ? 'large' : 'regular';
  const btnVariant = variant === 'outline' ? `-${variant}` : '';
  return <button className={`btn ${btnSize} btn-${color}${btnVariant}`} disabled={disabled}> {children} </button>;
}

Button.defaultProps = {
  size: 'medium',
  variant: '',
  disabled: false,
  onClick: () => null
};

export default Button;