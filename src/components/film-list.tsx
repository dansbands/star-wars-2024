import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { formatDate, formatTitle, posters } from "../util/helpers";

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

export type FilmListProps = {
  films: CharacterFilms[];
  setCurrentFilm: Dispatch<SetStateAction<CharacterFilms>>;
};

const FilmList = ({ films, setCurrentFilm }: FilmListProps) => {
  return (
    <div>
      <TableContainer>
        <Table
          sx={{ margin: "20px 10% 0", width: "80%" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Release Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {films.map((film) => (
              <TableRow
                className="film-row"
                onClick={() => setCurrentFilm(film)}
                key={film.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img
                    src={posters[film.episode_id - 1]}
                    alt="poster"
                    className="table-image-card"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {formatTitle(film.title, film.episode_id)}
                </TableCell>
                <TableCell>{formatDate(film.release_date)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilmList;
