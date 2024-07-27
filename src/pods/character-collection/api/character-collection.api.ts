import axios from 'axios';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

import {
  CharacterCollectionApi,
  CharacterCollectionParams,
  Character,
  GetCharactersResponse,
} from './character-collection.api-model';

export const getCharacters = async (params: CharacterCollectionParams): Promise<CharacterCollectionApi> => {
  const { page, name } = params;
  let urlParams = `?page=${page}`;
  if (name.trim()) urlParams += `&name=${name}`;
  const response = await axios(`${process.env.API_URL}/character/${urlParams}`);
  return await response.data;
}

// export const getCharacters = async (
//   params: CharacterCollectionParams
// ): Promise<CharacterCollectionApi> => {
//   const { page, name } = params;

//   const query = gql`
//     query ($page: Int, $name: String) {
//       characters(page: $page, filter: { name: $name }) {
//         info {
//           count
//           pages
//           next
//           prev
//         }
//         results {
//           id
//           name
//           image
//         }
//       }
//     }
//   `;

//   const { characters } = await graphQLClient.request<GetCharactersResponse>(
//     query,
//     { page: +page, name }
//   );

//   return characters;
// };
