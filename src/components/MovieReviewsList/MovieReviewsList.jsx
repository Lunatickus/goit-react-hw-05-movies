import { MovieReviewsItem } from './MovieReviewsItem';

export const MovieReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return <MovieReviewsItem key={id} author={author} content={content} />;
      })}
    </ul>
  );
};
