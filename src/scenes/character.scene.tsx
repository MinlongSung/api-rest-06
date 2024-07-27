import React from 'react';

import { AppLayout } from 'layouts';
import { CharacterContainer } from 'pods/character';

export const CharacterScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterContainer />
    </AppLayout>
  );
};
