import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Character } from './character.vw';
import { getCharacter } from './character.repository';

import { CharacterComponent } from './character.component';
import { switchRoutes } from 'core/router';

export const CharacterContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<Character>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const navigate = useNavigate();
  const handleClose = () => {
    if (window.history.length <= 2) {
      navigate(switchRoutes.characterCollection);
    } else {
      navigate(-1);
    }
    setCharacter(null);
  };

  const handleSentence = (data) => {
    setCharacter(data);
  }

  React.useEffect(() => {
    if (id) {
      getCharacter(id)
        .then(setCharacter)
        .catch((error) => {
          console.log(error);
          setCharacter(null);
        }).finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);


  return (
    <>
      {!isLoading && <CharacterComponent character={character} onClose={handleClose} onSubmit={handleSentence} />}
    </>
  );
};
