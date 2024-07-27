import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import { Character, PaginationInfo } from './character-collection.vw';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterCollectionParams } from './api';
import { getCharacters } from './character-collection.repository';
import { linkRoutes } from 'core/router';
import { Pagination, TextField } from 'common/components';

export const CharacterCollectionContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [characters, setCharacters] = React.useState([]);
  const [paginationInfo, setPaginationInfo] =
    React.useState<PaginationInfo>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [page, setPage] = React.useState(searchParams.get('page') || '1');
  const [name, setName] = React.useState(searchParams.get('name') || '');
  const [debouncedName] = useDebounce(name, 300);

  const loadCharacters = ({ page, name }) => {
    setIsLoading(true);
    getCharacters({ page, name: name })
      .then(({ characters, paginationInfo }) => {
        setCharacters(characters);
        setPaginationInfo(paginationInfo);
      })
      .catch((error) => {
        console.log(error);
        setCharacters([]);
        setPaginationInfo(null);
        window.scrollTo(0, 0);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    loadCharacters({ page, name: debouncedName });
  }, [page, debouncedName]);

  React.useEffect(() => {
    setPage(searchParams.get('page') || '1');
    setName(searchParams.get('name') || '');
  }, [searchParams]);

  const handleSelect = (character: Character) => {
    navigate(linkRoutes.character(character.id), { state: { fromCharacters: true } });
  };

  const handleParams = ({ page, name }: CharacterCollectionParams) => {
    if (name) {
      setSearchParams({ page, name });
    } else {
      setSearchParams({ page });
    }
  };

  const handlePagination = (event: React.ChangeEvent, pageSelected: number) => {
    setPage(pageSelected + '');
    handleParams({ page: pageSelected + '', name });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPage('1');
    setName(e.target.value);
    handleParams({ page: '1', name: e.target.value });
  };

  return (
    <>
      <h3>Rick and Morty</h3>

      <TextField
        name="character-name"
        value={name}
        onChange={handleChange}
        id="outlined-basic"
        label="Character name"
        variant="outlined"
        size="small"
      />

      {!isLoading && <CharacterCollectionComponent characters={characters} onSelect={handleSelect} />}

      {paginationInfo && (
        <Pagination
          count={paginationInfo.pages || 1}
          page={+page}
          color="primary"
          onChange={handlePagination}
        />
      )}
    </>
  );
};
