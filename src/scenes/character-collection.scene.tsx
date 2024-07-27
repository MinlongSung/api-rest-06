import React from 'react';

import { AppLayout } from 'layouts';
import { CharacterCollectionContainer } from 'pods/character-collection';

export const CharacterCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterCollectionContainer />
    </AppLayout>
  );
};
