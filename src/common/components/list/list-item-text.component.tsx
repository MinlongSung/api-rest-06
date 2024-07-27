import React from 'react';

import ListItemTextMUI, { ListItemTextProps } from '@mui/material/ListItemText';

export const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return <ListItemTextMUI {...props} />;
};
