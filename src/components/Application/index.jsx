import { useEffect, useState } from 'react';
import axios from 'axios';

import CardCharacter from '../Card';

import { ContainerApp, ContentCharacters, HeaderApp, Loader } from './styles';

import IconLoader from '../../assets/loader.gif';

export function Application() {
  const [characters, setCharacters] = useState([]);
  const [qtdCharacteres, setQtdCharacteres] = useState('');
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
        setQtdCharacteres(response.data.info.count);
        setIsLoading(false);
      });
  }, [page]);

  function handleClick() {
    setPage((prevState) => prevState + 1);
  }

  return (
    <>
      {isLoading && (
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <h1>Rick and Morty</h1>
          <span>Nº de Personagens: {qtdCharacteres}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ id, image, name, gender, species }, index) => {
                return (
                  <CardCharacter
                    key={id}
                    image={image}
                    name={name}
                    gender={gender}
                    specie={species}
                  />
                );
              })}
          </div>
          {!(page === countPages) && (
            <button onClick={handleClick}>Carregar mais</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
}
