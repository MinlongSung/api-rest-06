import React from "react";

import { Character } from "./character-collection.vw";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Alert,
  Avatar
} from 'common/components';

interface Props {
  characters: Character[];
  onSelect: (character: Character) => void;
};

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characters, onSelect } = props;

  return (
    <>
      {characters.length > 0 ? (
        <section>
          <List>
            {characters.map((character) => (
              <ListItem key={character.id} onClick={() => onSelect(character)}>
                <ListItemAvatar>
                  <Avatar
                    src={character.image}
                    alt={`${character.name}_avatar`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={character.name}
                />
              </ListItem>
            ))}
          </List>
        </section>
      ) : (
        <Alert severity="info" sx={{ my: 1 }}>Characters not found</Alert>
      )}
    </>);
}
