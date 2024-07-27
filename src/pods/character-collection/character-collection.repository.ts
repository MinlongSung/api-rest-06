import * as api from './api';
import * as VM from './character-collection.vw';
import { mapFromApiToVm } from './character-collection.mapper';

export const getCharacters = (params: api.CharacterCollectionParams): Promise<VM.CharacterCollectionApi> => {
  return api.getCharacters(params).then(mapFromApiToVm);
};
