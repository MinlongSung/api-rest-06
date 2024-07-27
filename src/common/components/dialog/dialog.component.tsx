import React from 'react';
import DialogMUI, { DialogProps } from '@mui/material/Dialog';

export const Dialog: React.FC<DialogProps> = (props) => {
  return <DialogMUI {...props} />;
};
