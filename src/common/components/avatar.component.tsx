import React from 'react';

import AvatarMUI, { AvatarProps } from '@mui/material/Avatar';

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <AvatarMUI {...props} />;
};
