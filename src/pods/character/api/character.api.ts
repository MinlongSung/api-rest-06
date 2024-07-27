import axios from 'axios';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

import { Character, GetCharacterResponse } from './character.api-model';


export const getCharacter = async (id: string): Promise<Character> => {
  const request = await axios(`${process.env.API_URL}/character/${id}`);
  return await request.data;
};

export const saveBestSentences = async (
  id: string,
  bestSentences: string[]
) => {
  const { status, data } = await axios.patch(`${process.env.API_URL}/character/${id}`, {
    bestSentences: bestSentences,
  });

  return {
    status,
    data,
  };
};

//* GraphQl
// export const getCharacter = async (id: string): Promise<Character> => {
//   const query = gql`
//     query ($id: ID!) {
//       character(id: $id) {
//         id
//         name
//         image
//       }
//     }
//   `;

//   const { character } = await graphQLClient.request<GetCharacterResponse>(query, { id: +id });

//   return character;
// };
