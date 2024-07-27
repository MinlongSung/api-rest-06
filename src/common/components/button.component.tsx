import React from 'react';

import ButtonMUI, { ButtonProps } from '@mui/material/Button';

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonMUI {...props} />;
};
