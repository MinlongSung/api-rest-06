import * as AM from './api';
import * as VM from './character.vw';

export const mapFromApiToVm = (character: AM.Character): VM.Character => ({
  id: character.id,
  name: character.name,
  image: character.image,
  bestSentences: character.bestSentences ?? [],
});
