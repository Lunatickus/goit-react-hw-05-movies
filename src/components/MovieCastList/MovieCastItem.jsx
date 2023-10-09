import { StyledCastImg } from './MovieCastItem.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieCastItem = ({ name, profile_path, character }) => {
  return (
    <li>
      <StyledCastImg src={profile_path ? `${IMAGE_URL}/${profile_path}` : defaultImg} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
