export interface CharacterFilms {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

type FilmListProps = {
  films: CharacterFilms[];
};

const FilmList = ({ films }: FilmListProps) => {
  return (
    <div>
      <div>Films:</div>
      <ul>
        {films.map((film) => {
          // console.log("film MAP", film);
          return <li>{film.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilmList;
