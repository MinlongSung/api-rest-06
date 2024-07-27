import * as api from './api/character.api';
import * as VM from './character.vw';
import { mapFromApiToVm } from './character.mapper';

export const getCharacter = (id: string): Promise<VM.Character> => {
  return api.getCharacter(id).then(mapFromApiToVm);
};

export const saveBestSentences = (id: string, bestSentences: string[]) => {
  return api.saveBestSentences(id, bestSentences).then(({ status, data }) => ({
    status,
    data: mapFromApiToVm(data),
  }));
};
