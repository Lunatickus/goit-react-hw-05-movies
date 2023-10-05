import { StyledCastImg } from './MovieCastItem.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieCastItem = ({ name, profile_path, character }) => {
  return (
    <li>
      <StyledCastImg src={IMAGE_URL + profile_path} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
