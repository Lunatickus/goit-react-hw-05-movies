import { MovieCastItem } from './MovieCastItem';

export const MovieCastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <MovieCastItem
            key={id}
            name={name}
            profile_path={profile_path}
            character={character}
          />
        );
      })}
    </ul>
  );
};
