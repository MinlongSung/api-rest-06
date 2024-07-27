import React from 'react';

import TextFieldMUI, { TextFieldProps } from '@mui/material/TextField';

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <TextFieldMUI {...props} />;
};
