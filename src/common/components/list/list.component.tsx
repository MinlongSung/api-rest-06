import React from 'react';

import ListMUI, { ListProps } from '@mui/material/List';

export const List: React.FC<ListProps> = (props) => {
  return <ListMUI {...props} />;
};
