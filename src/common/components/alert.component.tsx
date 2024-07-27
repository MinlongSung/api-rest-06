import React from 'react';
import AlertMUI, { AlertProps } from '@mui/material/Alert';

export const Alert: React.FC<AlertProps> = (props) => {
  return <AlertMUI {...props} />;
};
