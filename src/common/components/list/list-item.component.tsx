import React from 'react';

import ListItemMUI, { ListItemProps } from '@mui/material/ListItem';

export const ListItem: React.FC<ListItemProps> = (props) => {
  return <ListItemMUI {...props} />;
};
