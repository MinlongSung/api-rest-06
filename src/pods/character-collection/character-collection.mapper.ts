import * as AM from './api/character-collection.api-model';
import * as VM from './character-collection.vw';

export const mapFromApiToVm = (
  data: AM.CharacterCollectionApi
): VM.CharacterCollectionApi => {
  const { info, results } = data;
  const characters = results.map((character) => mapCharacterToVm(character));
  return {
    paginationInfo: info,
    characters,
  };
};

export const mapCharacterToVm = (character: AM.Character): VM.Character => ({
  id: character.id,
  name: character.name,
  image: character.image,
  bestSentences: character.bestSentences ?? [],
});
