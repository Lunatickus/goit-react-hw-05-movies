import { Link } from "react-router-dom";
import {
    Wrapper,
    StyledImg,
    InformWrapper,
    StyledGenres,
} from "./MovieDetailsInfo.styled";

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetailsInfo = ({poster_path, title, vote_average, overview, genres}) => {
    return (
        <>
        <Wrapper>
            <StyledImg src={IMAGE_URL + poster_path} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>User Score {Math.round(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <StyledGenres>
                {genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </StyledGenres>
            </div>
          </Wrapper>
          <InformWrapper>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </InformWrapper>
        </>
    )
}