import React from 'react';

import ListItemAvatarMUI, { ListItemAvatarProps } from '@mui/material/ListItemAvatar';

export const ListItemAvatar: React.FC<ListItemAvatarProps> = (props) => {
  return <ListItemAvatarMUI {...props} />;
};
